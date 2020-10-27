import React from 'react'
import './Product.css'
import {useStateValue} from './StateProvider';



const Product=({id,title,image,price,rating})=> {
    // const [{},dispatch]=useStateValue();
   
    // const addToBasket=()=>
    // {
    //     dispatch({
    //         type: 'ADD_TI_BASKET',
    //         item:{

    //             id: id,
    //             title:title,
    //             image:image,
    //             price: price,
    //             rating: rating
    //         }
    //     })


    // }

    
    return (
        <div className="product">

        <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
<small>Rs</small>
<strong>{price}</strong>

        </p>
<div className="product_rating">

    {Array(rating).fill().map((_)=>(
        <p> ⭐</p>
    )
    )
    }
</div>



</div>

<img src={image} alt=""/>
<button >Add to basket</button>




        </div>
    )
}

export default Product
