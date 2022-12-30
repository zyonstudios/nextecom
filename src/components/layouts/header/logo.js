import Image from 'next/image'
import React from 'react'

const logo = ({logo}) => {
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

export default logo
