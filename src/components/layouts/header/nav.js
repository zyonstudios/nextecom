import { isEmpty } from 'lodash';
import React from 'react';
import styles from '../../styles/Navbar.module.css';
import Link from "next/link";



const Nav = ({headerMenus}) => {
   console.warn('navmenus',headerMenus)
    if(isEmpty(headerMenus)){
        return null;
    }
    return (
        <div className={styles.navmenu}>
            {headerMenus.map((menuItem)=>{
                return(
                    <div>{menuItem.node.label}</div>
                )
                
            })}
        </div>
    )
}

export default Nav