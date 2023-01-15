import Link from 'next/link'
import React from 'react'
import styles from '../styles/Shop.module.css'



const Catcard = ({category}) => {
    return (  
        <>
            <div  className={styles.singleproduct}>                                    
                
                <Link 
                href={`/categories/`+ category.slug} key={category.id}>             
                    <a>
                        <h2>{category.name}</h2>
                    </a>                    
                    <h2>{category.slug}</h2>          
                </Link>                   
            </div>
        </>            
    )
}

export default Catcard
// ${encodeURIComponent(category.id)}