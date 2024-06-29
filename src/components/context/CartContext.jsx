import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito((prevCarrito) => {
            const productoExistente = prevCarrito.find((item) => item.id === producto.id);
            if (productoExistente) {
                return prevCarrito.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            }
            return [...prevCarrito, { ...producto, cantidad: 1 }];
        });
    };

    const calcularCantidad = () => carrito.reduce((acc, prod) => acc + prod.cantidad, 0);

    const calcularTotal = () => {
        const total = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
        return total.toFixed(2);
    };

    const vaciarCarrito = () => setCarrito([]);

    const eliminarProducto = (producto) => {
        setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== producto.id));
    };

    const aumentarCantidad = (productoId) => {
        setCarrito((prevCarrito) => 
            prevCarrito.map((item) => 
                item.id === productoId 
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            )
        );
    };

    const disminuirCantidad = (productoId) => {
        setCarrito((prevCarrito) => 
            prevCarrito.map((item) => 
                item.id === productoId && item.cantidad > 1
                    ? { ...item, cantidad: item.cantidad - 1 }
                    : item
            ).filter((item) => item.cantidad > 0)
        );
    };

    return (
        <CartContext.Provider
            value={{
                carrito,
                agregarAlCarrito,
                calcularCantidad,
                calcularTotal,
                vaciarCarrito,
                eliminarProducto,
                aumentarCantidad,
                disminuirCantidad,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
