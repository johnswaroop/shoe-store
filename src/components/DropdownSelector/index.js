import React, { useEffect, useState } from 'react';
import Styles from './dropdownSelector.module.scss'
import Assets from '../../Assets'
import RadioCustom from '../RadioCustom';


const DropdownSelector = (props) => {

    const [isCollapsed, setIsCollapsed] = useState(true);

    useEffect(() => {
        setIsCollapsed(props.Collapsed)
    }, [props.Collapsed]);

    const handleCollapse = () => {
        setIsCollapsed(state => !state);
    }

    return (
        props.options ? <div className={Styles.dropdown_selector}>
            <span className={Styles.dropdown_selector_head} onClick={handleCollapse}>
                <h1>{props.title}</h1>
                <img src={Assets.downArrow} key={isCollapsed} className={isCollapsed ? Styles.up : Styles.down} alt="" />
            </span>
            {!isCollapsed && <ul className={Styles.dropdown_selector_options}>
                {
                    props.options.map(option =>
                        <li>
                            <RadioCustom />
                            <p>{option}</p>
                        </li>
                    )
                }
            </ul>}
        </div> : null
    );
};

export default DropdownSelector;