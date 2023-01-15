import Image from 'next/image'


const Logo = ({logo}) => {
  return (
    <div>
        {logo.map((logoimg)=>{
        return(            
            <Image            
            src={logoimg.node.sourceUrl} 
            alt={logoimg.node.altText} 
            width="230" 
            height="97"                                
            /> 
        )             
        
    })}
    </div>
  )
}

export default Logo