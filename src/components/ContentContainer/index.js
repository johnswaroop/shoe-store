import React, { useContext, useEffect, useState } from 'react';
import Styles from './contentContainer.module.scss'
import ProductCard from '../ProductCard';
import Assets from '../../Assets'
import productsContext from '../../Context/ProductsContext';

const ContentContainer = () => {

    const api = useContext(productsContext);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (api.productList?.length > 0) {
            setProducts(api.productList.map((product) => {
                return <ProductCard imageUrl={product.url} title={product.name} price={product.price} productId={product._id} />
            }));
        }
    }, [api.productList])


    return (
        <section className={Styles.content_container}>
            <span className={Styles.nav_btn}>
                <img src={Assets.navBtn} alt="" />
            </span>
            {products}
        </section>
    );
};

export default ContentContainer;