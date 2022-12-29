import { useState } from 'react';
import styles from '../../styles/Promobar.module.css';

const Promobar = () => {    
  return (
    <div className={styles.promobar}>
        <div className={styles.slide}>
            Promo bar 1
        </div>
        <div className={styles.slide}>
            Promo bar 2
        </div> 
        <div className={styles.slide}>
            Promo bar 3
        </div>           
    </div>
  )
}

export default Promobar