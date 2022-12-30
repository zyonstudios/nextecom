import woocommerceRestApi from "@woocommerce/woocommerce-rest-api";


const api = new woocommerceRestApi({
    url:process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
    consumerKey:env.WC_CONSUMER_KEY,
    consumerSecret:env.WC_CONSUMER_SECRET,
    version:"wc/v3",
});

function App() {
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
        <div className="App">
            <div className="product-container">
            {products.map((order, index) => {                
                <div key={index}>
                    <h2>{products.name}</h2>

                </div>
            }
            )};
                
            </div>
        </div>
    );
}

export default App;