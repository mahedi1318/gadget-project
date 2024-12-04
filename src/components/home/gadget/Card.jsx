import React from 'react'

const Card = ({cardValue}) => {
  return (
    <div>
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-4 pt-6">
                <img
                src={cardValue?.product_image}
                alt="Shoes"
                className="rounded-xl w-full h-[200px] object-cover" />
            </figure>
            <div className="card-body items-start text-start">
                <h2 className="card-title">{cardValue?.product_title}</h2>
                <p>Price: {cardValue?.price}</p>
                <div className="card-actions">
                <button className="btn btn-outlate border border-[#9538E2] px-10 rounded-full sora_font text-[16px] mt-2">Details</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
