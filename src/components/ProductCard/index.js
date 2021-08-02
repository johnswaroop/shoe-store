import Assets from '../../Assets';
import React, { useContext, useState } from 'react';
import Styles from './productCard.module.scss'
import UserContext from '../../Context/UserContext';

const ProductCard = (props) => {

    const [isWishlisted, setIsWishlisted] = useState(false);
    const User = useContext(UserContext);


    const handleWishlist = () => {
        User.setWishlistCount((count) => {
            isWishlisted ? count-- : count++
            return count;
        });
        setIsWishlisted(state => !state);
    }


    return (
        <div className={Styles.product_card}>
            <span className={Styles.line} />
            <img src={isWishlisted ? Assets.likeActive : Assets.likeInactive} className={Styles.wish_list} alt="" onClick={handleWishlist} />
            <span className={Styles.titles}>
                <p className={Styles.brand}>Nike</p>
                <p className={Styles.product}>{props.title}</p>
            </span>
            <span className={Styles.product_image}>
                <img src={props.imageUrl} alt="" />
            </span>
            <span className={Styles.product_details}>
                <p>Price</p>
                <h3 className={Styles.price}>₹ {props.price}</h3>
            </span>

        </div>
    );
};

export default ProductCard;