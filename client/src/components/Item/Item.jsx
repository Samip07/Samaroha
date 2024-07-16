import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
    <>
      
        <div className="item1">
            <img src={props.image} alt="hotel1" />
            <p>{props.name}</p>
            <div className="rate">
            <h3>{props.rate}</h3>
            
            </div>

      </div>
    </>
  )
}

export default Item
