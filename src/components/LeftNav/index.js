import React from 'react';
import Styles from './leftNav.module.scss'
import DropdownSelector from '../DropdownSelector';

const LeftNav = () => {


    return (
        <nav className={Styles.left_nav}>
            <DropdownSelector title={"Brands"}
                options={
                    ['Nike', 'Adidas', 'Puma', 'converse', 'Vans']
                }
            />
            <DropdownSelector title={"Categories"}
                options={
                    ['Basketball', 'Running', 'Football', 'Casual', 'cleets']
                }
            />
        </nav >
    );
};

export default LeftNav;