import ItemListContainer from "./components/ItemListContainer"
import "./css/main.css"
import Header from "./components/header/Header"
import Pokemon from "./components/Pokemon";
import PokemonList from "./components/PokemonList";
import Counter from "./components/Counter";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

function App () {

  const numerito = 1;

  return (
    <BrowserRouter>
      <Header numerito={numerito}></Header>
      <Routes>
        <Route path="/" element={<PokemonList/>} />
        <Route path="modelos" element={<ItemListContainer/>} />
        <Route path="/*" element={<NotFound/>} />
        <Route path="/pokemon/:pokemonId" element={<Pokemon />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
