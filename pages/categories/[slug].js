import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'
import Image from 'next/image';
import styles from '../../styles/Shop.module.css'
import Header from '../../components/Header/Header'
import { GET_HEADER_QUERIES } from '../../src/queries/header-queries'
import { client } from '../../src/apollo/apollo';
import Catproducts from '../../components/Catproducts';

const api = new WooCommerceRestApi({
  url:"https://devalop.co.uk",
  consumerKey:"ck_e926b33e717053eff1475839b51fa7a3db0e9e49",
  consumerSecret:"cs_a4753be53059609978e24d3f719cf3b86cfa41e0",
  version:"wc/v3",
});

export const getStaticPaths = async () =>{ 

  const res = await fetch(`https://devalop.co.uk/wp-json/wc/v3/products/categories` + '?consumer_key=' + api.consumerKey + `&consumer_secret=`+ api.consumerSecret);
  const data = await res.json();

  const paths = data.map((ninja)=>{
    
    return{
      params: {id: ninja.id.toString(),slug:ninja.slug}      
    }
  })

  return {
    paths,
    fallback: 'blocking'
}

}


const Categorypage = ({menuItems, siteLogo}) => {
    const router = useRouter()
    const catslug = router.query.slug;       
    const [categories, setCategories] = useState([]);   
    
    
    useEffect(() => {
      if (router.isReady) {
        // Code using query        
        console.log(router.query);
        fetchCat();
      }
    }, [router.isReady]);

    
    let fetchCat = () => {

        api
            .get("products/categories",{
                slug: catslug,
               
            })
            .then((response)=>{
                if(response.status === 200){
                    setCategories(response.data)                   
                }
            })
            .catch((error) => {});
    }
    
   
    return (
      <>
        <Header headerMenus={menuItems} logo={siteLogo}/>
        <div className={styles.productgallery}>      
          {categories.map((category) => {
            
            return (
              <Catproducts key={category.id} category={category} />   
            );
          })}
        
        </div>    
      </>
    )
}

export default Categorypage

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

