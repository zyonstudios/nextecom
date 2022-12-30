import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'
import Image from 'next/image';

const api = new WooCommerceRestApi({
  url: "https://devalop.co.uk",
  consumerKey: "ck_e926b33e717053eff1475839b51fa7a3db0e9e49",
  consumerSecret: "cs_a4753be53059609978e24d3f719cf3b86cfa41e0",
  version: "wc/v3",
  axiosConfig: { headers: {} },
});

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  let fetchProducts = () => {
    api
      .get("products", {
        per_page: 20,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setProducts(response.data);
        }
      })
      .catch((error) => {});
  };

  return (
 
    <div>      
          {products.map((product, index) => {
            return (
              <div key={index} > 
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
  );
}