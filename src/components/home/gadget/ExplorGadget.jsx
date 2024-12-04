import React, { useState } from 'react'
import Category from '../category/Category'
import Card from './Card'
import { useLoaderData, useLocation } from 'react-router-dom'

const ExplorGadget = () => {

let alldata = useLoaderData();
let categoryPath = useLocation()
let storPathName = categoryPath.pathname.slice(1)

    let commonData = [];
    if(commonData.length === 0){
        commonData = alldata;
    }

    if(storPathName === "laptops") {
        let filterdata = alldata.filter((categ)=> categ.category === storPathName)      
        commonData = filterdata
    }else if(storPathName === "phones"){
        let filterdata = alldata.filter((categ)=> categ.category === storPathName)      
        commonData = filterdata      
    }else if(storPathName === "watches"){
        let filterdata = alldata.filter((categ)=> categ.category === storPathName)      
        commonData = filterdata       
    }else if(storPathName === "cameras"){
        let filterdata = alldata.filter((categ)=> categ.category === storPathName)      
        commonData = filterdata       
    }else if(storPathName === "chargers"){
        let filterdata = alldata.filter((categ)=> categ.category === storPathName)      
        commonData = filterdata       
    }else if(storPathName === "allProduct"){
        commonData = alldata
    }
console.log(commonData)
  return (
    <section className='container'>
        <div>
            <h2 className='sora_font text-[40px] font-bold text-center'>Explore Cutting-Ed ge Gadgets</h2>
        </div>
        <div className='md:flex my-10 gap-5'>
            <aside  className='md:w-1/5'>
                <Category />
            </aside>
            <div className='md:w-4/5'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {commonData.map((cartData)=> (
                        <Card key={cartData.product_id} cardValue={cartData} />                  
                    ))}
                    {}
                </div>
            </div>
        </div>      
    </section>
  )
}

export default ExplorGadget
