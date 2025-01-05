import React, { useState } from 'react'

export default function CartProduct(props) {
    const clickHandler=(id)=>{
      //  this.props.onRemove(id)
      props.onRemove(id)
        
    }

        let { id, title, price, img } = this.props
        return (
            <div class="cart-row">
                <div class="cart-item cart-column">
                    <img class="cart-item-image" src={img} width="100" height="100" />
                    <span class="cart-item-title">{title}</span>
                </div>
                <span class="cart-price cart-column">${
            price}</span>
                <div class="cart-quantity cart-column">

                    <button class="btn btn-danger" type="button"
                   onClick={()=>clickHandler(props.id)} >REMOVE</button>
                </div>
            </div>
        )
    
}
