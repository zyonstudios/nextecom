import { useEffect, useState } from 'react'
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'
import Image from 'next/image';
import styles from '../styles/Shop.module.css'
import { paginate } from '../utils/paginate'
import Pagination from './Pagination'
import { useRouter } from 'next/router';





const api = new WooCommerceRestApi({
    url:"https://devalop.co.uk",
    consumerKey:"ck_e926b33e717053eff1475839b51fa7a3db0e9e49",
    consumerSecret:"cs_a4753be53059609978e24d3f719cf3b86cfa41e0",
    version:"wc/v3",
});



const Catproducts = ({category}) => {
    const router = useRouter();
    // List products    
    const [products, setProducts] = useState([]);       
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    const pagesCount = Math.ceil(products/pageSize);
    
    // if (pagesCount === 1) return null;    

 
      

    useEffect(()=>{              
            fetchProducts(currentPage);
    },[]);
    
    let fetchProducts = (currentPage) => {

        api
            .get("products?page="+currentPage ,{
              category: category.id,
              per_page:pageSize,                         
            })
            .then((response)=>{
                if(response.status === 200){
                    setProducts(response.data)
                }
            })
            .catch((error) => {});
    }
    //pagination  
    const nextPage = () =>{
      const nextpage = currentPage +1 ;
      setCurrentPage(nextpage);  
      fetchProducts(nextpage);    
    }

    const previousPage = () =>{
      const backpage = currentPage -1 ;
      setCurrentPage(backpage);  
      fetchProducts(backpage); 
    }
    const exactPage = (key) =>{      
      setCurrentPage(key);  
      fetchProducts(key); 
    }

  // const handlePageChange = (page) =>{
  //   setCurrentPage(page);
  // }

  // const paginateProducts = paginate(products, currentPage, pageSize);
  
  
  return (
    <>
      
      <div className={styles.productgallery}>      
            {products.map((product, index) => {
              return (
                <div key={index} className={styles.singleproduct}> 
                    <Image
                    src={product.images[0].src}
                    width="500"
                    height="500"
                    alt="this image"
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
      <button onClick={() => previousPage()}>Previous Page</button>
      <h2>Page {currentPage}</h2>
      <button onClick={() => exactPage(7)}>Page {7}</button>
          
  

      <button onClick={() => nextPage()} >Next Page</button>

     
      
      {/* <Pagination 
        items={products.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />  */}
    
    
    </> 
  )
}

export default Catproducts

      
  
