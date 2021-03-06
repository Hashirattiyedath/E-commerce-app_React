import faker from 'faker';
import React, { createContext, useContext, useReducer } from 'react';
import cartReducer from './Reducers';

const Cart = createContext();

function Context({ children }) {

    const products = [...Array(20)].map(()=> ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    }));    

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    });

    return (
        <div>
            <Cart.Provider value={{state, dispatch}}> {children} </Cart.Provider>
        </div>
    )
}

export default Context;

export const CartState = ()=> {
    return useContext(Cart)
}