import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price,stock } }) => {
  return (

  stock > 0 ?   <div>
    <Link href={`/product/${slug.current}`}>
      <div className="product-card">
        <img 
          src={urlFor(image && image[0])}
          width={250}
          height={250}
          className="product-image"
        />
        <p className="product-name">{name}</p>
        <p className="product-price">دج{price}</p>
        <p className="product-price" style={{textAlign:'center',background:'#f02d34',color:'white',width:'80px',borderRadius:'4px',float:'right'}}>الكمية : {stock}</p>
      </div>
    </Link>
  </div> : null
  
  

  
  )
}

export default Product