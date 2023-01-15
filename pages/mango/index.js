export const getStaticProps = async ()  =>{

  const res = await fetch(`https://devalop.co.uk/wp-json/wc/v3/products/categories?consumer_key=ck_e926b33e717053eff1475839b51fa7a3db0e9e49&consumer_secret=cs_a4753be53059609978e24d3f719cf3b86cfa41e0`);
  const data = await res.json();

  return{
    props: {mydata:data}
  }

}


const index = ({mydata}) => {
 console.log("mydata", mydata);
  return (
    <>
     {mydata.map((theitem) => {
      return(
        <div>{theitem.slug}</div>      )
       
     })}   
    </>   
  )
}

export default index

