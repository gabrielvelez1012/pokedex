import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsername } from '../store/slices/userName.slice';


const Home = () => {
    const [name, setName] = useState("")
    
    const dispatch = useDispatch()
    dispatch(getUsername(name))
    const navigate = useNavigate()

    const goPokedex = () => {
        dispatch(getUsername(name))
        navigate("/pokedex")
    }

    return (
        <div className='start'>
            <h1>Pokemón API</h1>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button className='start-button' onClick={() => goPokedex()}>Enter</button>
        </div>
    );
};

export default Home;