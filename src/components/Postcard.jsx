import styles from '../styles/Postcard.module.css';
import Link from "next/link";


const Postcard = ({post}) => {
    
        return (
            <div className={styles.card}>
                <Link href={post.uri}>
                    <h3>{post.title} &rarr;</h3>
                </Link>
                
            </div>    
        )
   
}

export default Postcard