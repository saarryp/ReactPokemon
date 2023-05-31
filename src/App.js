import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import PokemonCard from "./components/PokemonCard";


function App() {

    async function getGTwentyPokemons() {

        try {
            const result = await axios.get(`"https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"`)
            console.log(result.data)

        } catch (e) {
        console.error(e);
    }
}



  return (
            <div>
            <PokemonCard pokemonName="ditto"/>
            <PokemonCard pokemonName="pikachu"/>
             <PokemonCard  pokemonName=""/>

            </div>
            );
}
export default App;
