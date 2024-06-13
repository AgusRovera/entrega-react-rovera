import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const PokemonList = () => {

    const [pokemons, setPokemons] = useState();
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=151");
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPokemons(data);
            })
    }, [url])
    
    const mostrarAnteriores = () => {
        pokemons.previous && setUrl(pokemons.previous);
    }
    
    const mostrarSiguientes = () => {
        pokemons.next && setUrl(pokemons.next);
    }
    
return (
    <div>{
        pokemons ? 
        <div>
            <div className="pokemons">
                {pokemons.results.map(pokemon => {
                    return <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                })}
            </div>
            <button onClick={mostrarAnteriores}>Anterior</button>
            <button onClick={mostrarSiguientes}>Siguiente</button>
        </div>
        : "Cargando..."
    }</div>
)
}
export default PokemonList