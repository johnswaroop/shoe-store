import { React, createContext, useState } from "react";
const userContext = createContext();


export const UserContextProvider = (props) => {

    const [wishlistCount, setWishlistCount] = useState(0);


    const value = {
        wishlistCount,
        setWishlistCount
    }



    return (
        <userContext.Provider value={value}>
            {props.children}
        </userContext.Provider>
    );
};


export default userContext;
