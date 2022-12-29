import { isEmpty } from 'lodash'
import React from 'react'
import Logo from './logo'
import Nav from './nav'
import styles from '../../styles/Header.module.css';
import Promobar from './promobar';

const Header = ({headerMenus, logo}) => {
    console.warn('headerMenus', headerMenus);
    if(isEmpty(headerMenus)){
        return null;
    }
    return (
        <header className={styles.header}>
            <Promobar />            
            <Logo logo={logo}/>
            <Nav headerMenus={headerMenus}/>
        </header>
    )
}

export default Header