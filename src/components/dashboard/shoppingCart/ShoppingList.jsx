import React, { useContext, useState } from 'react'
import { productContext } from '../../provider/ProviderData'
import ShowCart from '../ShowCart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShoppingList = () => {

    const {cart, setCart} = useContext(productContext)

    let deleteItem = (productId)=>{        
        const upDateCart = cart.filter((itemCart)=> itemCart.product_id !== productId)
        setCart(upDateCart)         
        // ---------toastify-----------
        toast.success('Delete Success!', {            
            autoClose: 1000,
        });
    }

  return (
    <section className='container mx-auto'>    
    <ToastContainer className="absolute top-0 right-0" /> 
      <div>
        {cart.map((itemCart)=> (
            <ShowCart cart={itemCart} key={itemCart.product_id} showDetails={true} deleteItem={deleteItem}/>            
        ) )}
        
      </div>
    </section>
  )
}

export default ShoppingList
