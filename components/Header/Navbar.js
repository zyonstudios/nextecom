import { isEmpty } from 'lodash';
import styles from '../../styles/Navbar.module.css'


const Navbar = ({headerMenus}) => {   
     if(isEmpty(headerMenus)){
         return null;
     }
     return (
         <div className={styles.navmenu}>
            <ul>
             {headerMenus.map((menuItem)=>{
                
                 return(                   
                        <li key={menuItem.id}>
                            <a href="/">
                                {menuItem.node.uri
                                }
                            </a></li>                      
                 )              
                 
             })}
            </ul>
         </div>
     )
 }

export default Navbar