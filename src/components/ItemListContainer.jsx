import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemLIst";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export const ItemListContainer = () => {
    let { categoryId } = useParams();
    let [productos, setProductos] = useState([]);

    let [titulo, setTitulo] = useState("Productos");


    useEffect(() => {
        const modelosRef = collection(db, "modelos");
        const q = categoryId ? query(modelosRef, where("categoria.id", "==", categoryId)) : modelosRef;

        const categoriasRef = collection(db, "categorias");
        let catQuery = categoryId && query(categoriasRef, where("id", "==", categoryId));

        getDocs(q)
            .then((res) => {
                setProductos(
                    res.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })
        if (catQuery) {
            getDocs(catQuery)
                .then((res) => {
                    setTitulo(res.docs[0].data().nombre);
                })
        } else {
            setTitulo("Modelos");
        }
    }, [categoryId]);

    return (
        <div className="item-list-container">
            <h1>{titulo}</h1>
            <ItemList productos={productos} />
        </div>
    );
};
