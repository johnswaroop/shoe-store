import React, { useContext } from 'react';
import Assets from '../../Assets';
import Styles from './wishlist.module.scss'
import userContext from '../../Context/UserContext';

const Wishlist = (props) => {

    const User = useContext(userContext);

    return (
        <span className={Styles.wishlist} >
            <img src={Assets.likeActive} alt="" />
            <p className={Styles.count}>{User.wishlistCount}</p>
        </span>
    );
};

export default Wishlist;