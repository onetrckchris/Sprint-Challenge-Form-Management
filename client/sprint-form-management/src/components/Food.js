import React from 'react';
import styled from 'styled-components';

const FoodCard = styled.div`
    padding: 20px;
    background-color: #fffde7;
    border: 1px solid #fdd835;
    border-radius: 5px;
    margin: 15px;
`;

const FoodTitle = styled.h3`
    margin: 0;
`;

const FoodTypeContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const FoodType = styled.p`
    margin: 0;
    color: gray;
    padding: 0 5px;
    font-style: italic;
`;

const IngredientsHeader = styled.h4`
    text-decoration: underline;
`;

const Ingredient = styled.p`

`;

const Food = ({food}) => {
    return (
        <FoodCard>
            <FoodTitle>{food.name}</FoodTitle>
            <FoodTypeContainer>
                <FoodType>{food.course}</FoodType> {'||'}
                <FoodType>{food.technique}</FoodType>
            </FoodTypeContainer>
            <IngredientsHeader>Ingredients</IngredientsHeader>
            {food.ingredients.map(ingredient => (
                <Ingredient key={ingredient}>{ingredient}</Ingredient>
            ))}
        </FoodCard>
    )
}

export default Food;