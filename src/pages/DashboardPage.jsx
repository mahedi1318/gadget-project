import React, { useState } from 'react'
import HeroCommon from '../components/hero_part/HeroCommon'
import BtnToggle from '../components/dashboard/BtnToggle'
import ShoppingList from '../components/dashboard/shoppingCart/ShoppingList'
import WishList from '../components/dashboard/wishList/WishList'

const DashboardPage = () => {

  const [showSw, setShowSw] = useState(false)

  return (
    <main>
       <HeroCommon />    
       <BtnToggle showSw={showSw} setShowSw={setShowSw} /> 
       {showSw ? <WishList />  : <ShoppingList /> }       
          
    </main>
  )
}

export default DashboardPage
