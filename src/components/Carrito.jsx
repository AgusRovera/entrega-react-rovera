import React, { useContext } from "react";
import { CartContext } from "../components/context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
    const { carrito, calcularTotal, vaciarCarrito, eliminarProducto, aumentarCantidad, disminuirCantidad } = useContext(CartContext);

    return (
        <div>
            {carrito.map((prod) => (
                <div key={prod.id}>
                    <h1>
                        {prod.nombre}: ${prod.precio} x {prod.cantidad}
                    </h1>
                    <button onClick={() => disminuirCantidad(prod.id)}>-</button>
                    <button onClick={() => aumentarCantidad(prod.id)}>+</button>
                    <button onClick={() => eliminarProducto(prod)}>❌</button>
                </div>
            ))}
            {carrito.length > 0 ? (
                <>
                    <h2>Total: ${calcularTotal()}</h2>
                    <button onClick={vaciarCarrito}>Vaciar carrito</button>
                    <Link to="/finalizar-compra">
                        <button>Finalizar compra</button>
                    </Link>
                </>
            ) : (
                <h2>Carrito vacío :/</h2>
            )}
        </div>
    );
};

export default Carrito;

