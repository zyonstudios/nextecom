import { useEffect, useState } from 'react'
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'
import Image from 'next/image';
import styles from '../styles/Shop.module.css'
import Header from '../components/Header/Header'
import { GET_HEADER_QUERIES } from '../src/queries/header-queries'
import { client } from '../src/apollo/apollo';

const api = new WooCommerceRestApi({
    url:"https://devalop.co.uk",
    consumerKey:"ck_e926b33e717053eff1475839b51fa7a3db0e9e49",
    consumerSecret:"cs_a4753be53059609978e24d3f719cf3b86cfa41e0",
    version:"wc/v3",
});

const Products = ({menuItems, siteLogo}) => {
    // List products
    const [products, setProducts] = useState([]);

    useEffect(()=>{
            fetchProducts();
    },[]);
    
    let fetchProducts = () => {

        api
            .get("products",{
                per_page:20,
            })
            .then((response)=>{
                if(response.status === 200){
                    setProducts(response.data)
                }
            })
            .catch((error) => {});
    }


  return (
    <>
    <Header headerMenus={menuItems} logo={siteLogo}/>
    <div className={styles.productgallery}>      
          {products.map((product, index) => {
            return (
              <div key={index} className={styles.singleproduct}> 
                  <Image
                   src={product.images[0].src}
                   width="500"
                   height="500"
                   layout="responsive"  
                   />                             
                  <h2>{product.name}</h2>
                  <h2>£{product.regular_price}</h2>
                  <br/> <br/> <br/>        
                  <button >Add to cart</button>                  
              </div>
            );
          })}
        
    </div>   
    </> 
  )
}

export default Products

export async function getStaticProps(context) {
    const {data, loading, networkStatus} = await client.query({
    query:GET_HEADER_QUERIES
    });
   
    return {
      props: {
      menuItems: data?.menuItems?.edges,
      siteLogo:data?.mediaItems?.edges,   
      }, // will be passed to the page component as props
      }
      }
    
      
  
