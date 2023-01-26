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
            <button className='button-item' onClick={() => navigate(-1)}>Back</button>
            <div className='container-item'>
                <h1 className='soy-item'>Soy</h1>
                <div className='name-item'>{pokemon.name}</div>
            </div>
               
            <img className='img-item' src={pokemon.sprites?.other.dream_world.front_default} alt="" />
            
        </div>
    );
};

export default Item;