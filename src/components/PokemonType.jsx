import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokemonType = ({getByType}) => {

    const [types, setTypes] = useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(res => setTypes(res.data))
    }, [ ])
    console.log(types);

    return (
        <div>
            <select name="" id="" onChange={e => getByType(e.target.value)}>
                <option value="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279/">All Pokemon</option>

                {
                    types.results?.map((type) => (
                        <option value={type.url} key={type.url}>{type.name}</option>
                        ))
                }

            </select>
            <h1>Soy el PokemonType</h1>
        </div>
    );
};

export default PokemonType;