import React, { useContext, useEffect, useState } from 'react'
import { productContext } from '../../provider/ProviderData'
import ShowCart from '../ShowCart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessImg from "../../../assets/images/success 1.png"

const ShoppingList = () => {

    const {cart, setCart} = useContext(productContext)
    const [sortedCart, setSortedCart] = useState(cart);
    const [sortOrder, setSortOrder] = useState('relavent');
    const [totalCost, setTotalCost] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
   
    
    useEffect(()=>{
      let sortData = [...cart];
      if(sortOrder === "low-high"){
        sortData.sort((a, b)=> a.price - b.price)
      }else if(sortOrder === "high-low"){
        sortData.sort((a, b)=> b.price - a.price)
      }
      setSortedCart(sortData)
    }, [cart, sortOrder])

    // -------------TOTAL-COST----------
    useEffect(()=>{
      const cost = cart.reduce((sum, item)=> sum + item.price, 0)
      setTotalCost(cost)
    },[cart])
    // -------------Purchase-button----------
    const handlePurchase = () => {
      setModalOpen(true);
    };
    
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
    <div className='flex justify-between items-center'>
      <h2>Cart</h2>
      <div className="flex gap-7 items-center">
        <h3 className='sora_font text-[16px] font-semibold'>Total Cost: {totalCost}</h3>
        <div>
          <select onChange={(e)=> setSortOrder(e.target.value)} value={sortOrder} className=' py-2 px-2 border-2 rounded-full sora_font text-[14px] font-normal' name="">
            <option value="relavent">Sort by Price</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        <button onClick={handlePurchase} className='px-6 py-2 bg_color rounded-full text-white sora_font ' type='button'>Purchase</button>
      </div>
    </div>
      <div>
        {sortedCart.map((itemCart)=> (
            <ShowCart cart={itemCart} key={itemCart.product_id} showDetails={true} deleteItem={deleteItem}/>            
        ) )}        
      </div>
        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-10 rounded-md shadow-md w-1/4 text-center">
            <img className='w-16 h-16 m-auto' src={SuccessImg} alt="SuccessImg" />
              <h2 className="text-2xl font-bold mb-4 mt-5 sora_font text-[20px]">Payment Successful!</h2>
              <p className='sora_font text-[18px] font-normal'>Thanks for purchasing.</p>
              <p className='sora_font text-[14px] font-semibold mt-3'>Total: ${totalCost}</p>
              <button
                className="mt-6 w-full py-2 bg_color rounded-full text-white sora_font"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
    </section>
  )
}

export default ShoppingList
