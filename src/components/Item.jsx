import React from "react";

const Item = ( {producto} ) => {

    return (
    <div className="producto">
        <img src={producto.imagen} />
        <h2 className="color-de-h2">{producto.nombre}</h2>
        <p className="color-de-texto">${producto.precio}</p>
        <p className="color-de-texto">{producto.descripcion}</p>

    </div>
    )
};

export default Item;
