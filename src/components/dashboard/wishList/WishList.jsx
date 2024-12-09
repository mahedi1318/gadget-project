import React, { useContext } from 'react'
import { productContext } from '../../provider/ProviderData'
import ShowCart from '../ShowCart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WishList = () => {

    const {wish, setWish} = useContext(productContext)

    let deleteItem = (productId)=>{
        const upDateCart = wish.filter((itemCart)=> itemCart.product_id !== productId)
        setWish(upDateCart)
          // ---------toastify-----------
          toast.success('Delete Success!', {            
            autoClose: 1000,
        });
    }

  return (
    <div className='container'>
        <ToastContainer className="absolute top-0 right-0" /> 
        {wish.map((wishlist)=>(
            <ShowCart  wish={wishlist} key={wishlist.product_id} showDetails={false} cart={wishlist} deleteItem={deleteItem}/>
        ))}
    </div>
  )
}

export default WishList
