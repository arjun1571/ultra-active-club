import React from 'react';
import "./YogaCart.css"

const YogaCart = (props) => {
    const{name,img,time,age,description}=props.data;
    return (
        <div className='cart-container'>
            <img src={img} alt="" />
            <div className='cart-text'>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>For Age: {age}</p>
            <p>Time required: {time}s</p>
            </div>
        </div>
    );
};

export default YogaCart;