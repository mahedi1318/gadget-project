import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'

const Category = () => {

  let data = useLoaderData();
  let categoris = data.map((category)=> category.category);
  let sidebar = new Set(categoris)
  let categoryArr = [...sidebar]

 
  return (
    <div>
      <div className='bg-gray-200 rounded-2xl p-5 space-y-4 py-8'>
        <NavLink to="/allProduct" className='btn btn-primary btn-block rounded-full sora_font '>All Products</NavLink>
        {categoryArr.map((cate)=>(
        <NavLink key={cate} to={`/${cate}`} className='btn btn-primary btn-block rounded-full sora_font '>
          {cate}
        </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Category
