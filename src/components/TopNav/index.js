import React from 'react';
import Styles from './topNav.module.scss'
import assets from '../../Assets'
import Wishlist from '../Wishlist';
const TopNav = () => {
    return (
        <nav className={Styles.nav_top}>

            <span className={Styles.search_box}>
                <img src={assets.searchIcon} alt="" />
                <input type="text" />
            </span>

            <Wishlist />

        </nav>
    );
};

export default TopNav;