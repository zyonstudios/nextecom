import { useEffect, useState } from 'react'
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'
import Image from 'next/image';
import styles from '../../styles/Shop.module.css'
import Header from '../../components/Header/Header'
import { GET_HEADER_QUERIES } from '../../src/queries/header-queries'
import { client } from '../../src/apollo/apollo';
import Link from 'next/link';
import { enableExperimentalFragmentVariables } from '@apollo/client';
import { useRouter } from 'next/router'
import Catcard from '../../components/Catcard';

const api = new WooCommerceRestApi({
    url:"https://devalop.co.uk",
    consumerKey:"ck_e926b33e717053eff1475839b51fa7a3db0e9e49",
    consumerSecret:"cs_a4753be53059609978e24d3f719cf3b86cfa41e0",
    version:"wc/v3",
});


const categories = ({menuItems, siteLogo}) => {
   
    const [categories,setCategories]= useState([]);
    

    useEffect(()=>{
        fetchCategories();
        },[]);

    let fetchCategories = () => {

        api
            .get("products/categories",{
              
                per_page:20,
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
              <Catcard key={category.id} category={category}></Catcard>              
            );
          })}
        
    </div>   
    </> 
  )
}


export default categories
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
    
     