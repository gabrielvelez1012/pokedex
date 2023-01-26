import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GetPokemon from './GetPokemon';

const Pokedex = () => {

    const userName = useSelector(state => state.userName)
    const navigate = useNavigate()
    const [pokemons, setPokemons] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        getAllPokemons()
    }, [])
    const getAllPokemons = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279/`)
            .then(res => setPokemons(res.data))
    }
    

    return (
        <div className='pokedex'>
            <button className='button-1' onClick={() => navigate(-1)}> Back</button>
            <h1>Elige tu pokemon</h1>{userName}
            <input type="text" value={search} onChange={(e => setSearch(e.target.value))}/>
            <button className='button-search' onClick={() => navigate(`/pokedex/${search}`)}>Search</button>
            <GetPokemon pokemons={pokemons} setPokemons={setPokemons}/>
        </div>
    );
};

export default Pokedex;