import { useContext, useState } from "react";
import { CartContext } from "../components/context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";

export const Checkout = () => {
    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [docId, setDocId] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const comprar = async (data) => {
        const pedido = {
            cliente: {
                nombre: data.nombre,
                email: data.email,
                direccion: data.direccion,
                ciudad: data.ciudad,
                codigoPostal: data.codigoPostal,
                telefono: data.telefono
            },
            productos: carrito,
            total: calcularTotal(),
            fecha: Timestamp.now()
        }

        const pedidosRef = collection(db, "pedidos");

        try {
            const docRef = await addDoc(pedidosRef, pedido);
            setDocId(docRef.id);
            vaciarCarrito();
        } catch (error) {
            setErrorMsg("Hubo un error al procesar tu pedido. Por favor, intenta nuevamente.");
            console.error("Error adding document: ", error);
        }
    }

    if (docId) {
        return (
            <>
                <h1>Muchas gracias por tu compra</h1>
                <p>Para hacer el seguimiento de tu pedido, el identificador es este: {docId}</p>
            </>
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit(comprar)}>
                <input
                    type="text"
                    placeholder="Ingrese su nombre completo"
                    {...register("nombre", { required: "Este campo es obligatorio" })}
                />
                {errors.nombre && <p>{errors.nombre.message}</p>}
                
                <input
                    type="email"
                    placeholder="Ingrese su e-mail"
                    {...register("email", {
                        required: "Este campo es obligatorio",
                        pattern: {
                            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                            message: "Dirección de e-mail no válida"
                        }
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}

                <input
                    type="text"
                    placeholder="Ingrese su dirección"
                    {...register("direccion", {required: "Este campo es obligatorio" })}
                />
                {errors.direccion && <p>{errors.direccion.message}</p>}

                <input
                    type="text"
                    placeholder="Ingrese su ciudad"
                    {...register("ciudad", { required: "Este campo es obligatorio" })}
                />
                {errors.ciudad && <p>{errors.ciudad.message}</p>}

                <input
                    type="text"
                    placeholder="Ingrese su código postal"
                    {...register("codigoPostal", { required: "Este campo es obligatorio" })}
                />
                {errors.codigoPostal && <p>{errors.codigoPostal.message}</p>}

                <input
                    type="text"
                    placeholder="Ingrese su número de teléfono"
                    {...register("telefono", { required: "Este campo es obligatorio" })}
                />
                {errors.telefono && <p>{errors.telefono.message}</p>}

                <button type="submit">Comprar</button>
            </form>
            {errorMsg && <p>{errorMsg}</p>}
        </div>
    )
}
