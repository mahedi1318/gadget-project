import React from 'react'
import { CiHeart } from "react-icons/ci";
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {

    let {id} = useParams();
    let singleDataLode = useLoaderData();
    let SingleValue = singleDataLode.find((product)=> product.product_id === id)
    console.log(SingleValue)

    const {product_title, price, description, Specification, rating, product_image} = SingleValue

  return (
    <section className=' pb-24 container h-[750px] md:h-[500px] relative bg-[rgba(204,204,204,0.1)]'>
      <div className='md:flex gap-7 items-center p-5 bg-[#fff] w-full xl:w-[1100px] m-auto absolute top-[-20%] md:top-[-28%] left-[50%] translate-x-[-50%] rounded-3xl shadow-lg '>
        <div>
            <img className='w-full md:max-w-[450px] h-[200px] md:h-[500px] object-cover rounded-lg' src={product_image} alt="" />
        </div>
        <div className='space-y-4'>
            <div>
                <h3 className='sora_font text-[28px] font-semibold text-[#333333]'>{product_title}</h3>
                <p className='sora_font text-[20px] font-semibold text-[#4d4d4d] mt-2'>Price: {price}</p>
                <button className='sora_font text-[14px] font-medium btn btn-outline btn-success rounded-full px-7 h-10 mt-4'>In Stock</button>
                <p className='sora_font text-[16px] font-normal text-[#8a8a8a] mt-4'>{description}</p>
            </div>
            <div className='mt-5'>
                <h4 className='sora_font text-[18px] font-bold'>Specification:</h4>
                <ul className='mt-3 ml-5'>
                    {Specification.map((specification, index)=>(
                        <li className='sora_font font-normal text-[#4d4d4d] mb-2' key={index}>
                            <span className='sora_font font-bold mr-3'>{index + 1}</span>                            
                            {specification}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className='sora_font text-[18px] font-bold mt-5'>Rating ⭐ {rating} </h4>
            </div>
            <div className='flex items-center gap-6 mt-5'>
                <button className='sora_font text-[18px] font-bold px-10 py-3 bg_color text-white rounded-full hover:bg-[#154c79] transition-all'>Add To Card</button>
                <button className=' w-11 h-11 border rounded-full flex justify-center items-center hover:bg-[#9538e2] hover:text-white transition-all'>
                    <CiHeart className='text-[25px]'/>
                </button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Details
