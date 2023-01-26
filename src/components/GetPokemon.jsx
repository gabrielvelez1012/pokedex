import axios from 'axios';
import React, { useState } from 'react';
import Card from './Card';
import Pagination from './Pagination';
import PokemonType from './PokemonType';

const GetPokemon = ({pokemons, setPokemons}) => {

    const [page, setPage] = useState(1)
    const perPage = 20
    const lastIndex = perPage * page
    

   const getByType = (url) => {
    setPage(1)
    axios.get(url)
        .then(res => setPokemons(res.data))
        console.log(url);

   }

   let shortRoutePokemons
   let shortRouteCount
   const route = () => {
    if(pokemons?.results) {
        shortRoutePokemons = pokemons?.results
        shortRouteCount = pokemons?.count
    }else{
        shortRoutePokemons = pokemons.pokemon 
        shortRouteCount = pokemons.pokemon?.length
    }
   }
   route()

   const totalPages = Math.ceil(shortRouteCount / perPage)
   const pokemonsToShow = shortRoutePokemons?.slice(lastIndex - perPage, lastIndex)

   const arrayIteration = []
   const iteration = () => {
    for (let i = 1; i <= totalPages; i++){
        arrayIteration.push(i)
    }
        
   }
   iteration()

   let access
   const selectAccess = () => {
    if(totalPages > 10){
        if(page > totalPages - 5){
            access = arrayIteration.slice(totalPages - 10, totalPages)
        }else if(page > 5) {
            access = arrayIteration.slice(page - 5, page + 5)
        }else{
            access = arrayIteration.slice(0, 10)
        }
    }else{
        access = arrayIteration.slice(0,totalPages)
    }
   }
   selectAccess() 

    return (
        <div>
            <PokemonType getByType={getByType}/>
            {
                pokemonsToShow?.map((pokemon) =>(
                    <Card url={pokemon.url ? pokemon.url : pokemon.pokemon.url} 
                    key={pokemon.url ? pokemon.url : pokemon.pokemon.url} />
                ))
            }
            {
                access.map((num) => (
                    <Pagination num={num} key={num} setPage={setPage}/>
                ))
            }
        </div>
    );
};

export default GetPokemon;