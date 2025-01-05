import React, { useState } from 'react'

export default function Social (props) {
   
        let{href,img} = this.props
      
        return (
            <li>
                <a href={href} target="_blank">
                    <img src={img}/>
                </a>
            </li>
        )
    
}
