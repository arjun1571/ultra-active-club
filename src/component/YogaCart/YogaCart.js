import React from 'react';
import "./YogaCart.css"

const YogaCart = (props) => {
    const{name,img,time,age,description}=props.data;
    return (
        <div className='cart-container'>
            <img src={img} alt="" />
            <div className='cart-text'>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>For Age: {age}</p>
            <p>Time required: {time}s</p>
            <button>Add to cart</button>
            </div>
            
        </div>
    );
};

export default YogaCart;