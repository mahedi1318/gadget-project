import React from 'react'
import { useNavigate } from 'react-router-dom'

const ShowCart = ({cart, showDetails, deleteItem }) => {

    const navigate = useNavigate()

    const handleDelete = ()=>{
        deleteItem(cart.product_id)
    }

    const handleDetails = ()=>{
        navigate(`/details/${cart.product_id}`)
    }

  return (
    <div className=''>
      <div className="card card-side bg-base-100 shadow-xl my-5">
            <figure>
                <img className='w-96 h-60 object-cover'
                src={cart.product_image}
                alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{cart?.product_title}</h2>
                <p>{cart?.description}</p>
                <div className="card-actions">
                    {showDetails && (
                        <button onClick={handleDetails} className="btn btn-primary">Details</button>
                    )}
                <button onClick={handleDelete} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowCart
