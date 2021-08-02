import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const productsContext = createContext();

export const ProductsContextProvider = (props) => {

    const [productList, setProductLsit] = useState(null);

    useEffect(() => {
        axios.get("/api/products",).then((res) => {
            setProductLsit(res.data);
        }).catch(er => console.log(er))
    }, [])


    const value = {
        productList
    }

    return (
        <productsContext.Provider value={value}>
            {props.children}
        </productsContext.Provider>
    );
};

export default productsContext;