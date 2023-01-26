import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const Item = () => {

    const userName = useSelector(state => state.userName)
    const {id} = useParams()

    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res  => setPokemon(res.data))
    }, [])
    

    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <h1>Soy el Item</h1>{userName}
            {pokemon.name}
            <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
            
        </div>
    );
};

export default Item;