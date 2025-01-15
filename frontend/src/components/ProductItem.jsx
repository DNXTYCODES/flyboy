import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    
    const {currency} = useContext(ShopContext);

  return (
  <Link onClick={()=>scrollTo(0,0)} className='text-goldenrod cursor-pointer' to={`/product/${id}`}>
      <div className=' overflow-hidden'>
        <img className=' rounded-xl hover:scale-110 transition ease-in-out aspect-square object-cover' src={image[0]} alt="" />
      </div>
      <p className='pt-3 pb-1 text-sm text-white prata-regular bg-golden-brown bg-clip-text text-transparent bg-to-b'>{name}</p>
      <p className=' text-sm font-medium bg-golden-brown bg-clip-text text-transparent bg-to-b'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
