import React, {useEffect, useState} from 'react';
import axios from "axios";

const PokemonCard = ({pokemonName}) => {
    const [pokemonData, setPokemonData]= useState({});


    useEffect(() => {
        async function fetchPokemon() {

            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                console.log(response.data)
                setPokemonData(response.data)
            } catch ( e ) {
                console.error(e);
            }
        }
        void fetchPokemon();
    }, [pokemonName])

    return (
        <div>
            {Object.keys(pokemonData).length > 0 &&
                <>
                    <h2>{pokemonData.species.name}</h2>
                    <img src={pokemonData.sprites.front_default} alt="een Pokemon"/>
                    <h3>Moves: {pokemonData.moves.length}</h3>
                    <h3>Weight: {pokemonData.weight}</h3>
                    <ul>
                        {pokemonData.abilities.map((ability) => {
                            return <li>{ability.ability.name}</li>
                        })}
                    </ul>
                </>
            }
        </div>
    );
};

export default PokemonCard;