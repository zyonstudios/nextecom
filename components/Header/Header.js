import React from 'react'
import Logo from './Logo';
import Navbar from './Navbar';
import styles from '../../styles/Header.module.css'
import Promobar from './promobar'





const Header = ({headerMenus, logo}) => {
    return ( 
        <>
        <Promobar />  
        <div className={styles.headercontainer}>
            <div className={styles.headertoprow}>
                <div></div>
                <div><Logo logo={logo}/></div>
                <div></div>                
            </div>
            <div className={styles.headerbtmrow}>
                <Navbar headerMenus={headerMenus}/>   
            </div>               
        </div>
        </>
      );
  
}

export default Header