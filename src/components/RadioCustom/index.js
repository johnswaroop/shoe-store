import React, { useState } from 'react';
import Styles from './radioCustom.module.scss'


const RadioCustom = () => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(state => !state);
    }

    return (
        <div className={isActive ? Styles.radio_custom_active : Styles.radio_custom} onClick={handleClick}>

        </div>
    );
};

export default RadioCustom;