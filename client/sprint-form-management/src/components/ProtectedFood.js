import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Food from './Food';

const FoodsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const ProtectedFood = (props) => {
    const [foods, setFoods] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [dataReceived, setDataReceived] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/api/restricted/data', { headers: { Authorization: token }})
            .then(response => {
                console.log(response);
                setFoods(response.data);
                setDataReceived(true);
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <>
        {!dataReceived ? <h1>Loading...</h1> : 
            <FoodsContainer>
                {foods.map(food => (
                    <Food key={food.name} food={food} />
                ))}
            </FoodsContainer>
        }
        </>
    )
}

export default ProtectedFood;