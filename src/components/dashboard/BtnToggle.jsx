import React from 'react'

const BtnToggle = ({showSw, setShowSw}) => {
  return (
    <div className='container text-center py-20 space-x-4'>
      <div onClick={()=> setShowSw(!showSw)} className={`btn ${showSw ? "btn-info" : ""}`}>cart</div>
      <div onClick={()=> setShowSw(!showSw)} className={`btn ${!showSw ? "btn-info" : ""}`}>wishList</div>
    </div>
  )
}

export default BtnToggle
