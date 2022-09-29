import React from 'react';
import profile from "../image/101.jpg"
import "./YogaSiteCart.css"

const YogaSiteCart = () => {
    return (
        <div className='site-cart'>
            <img className='rounded-circle' src={profile} alt="" />
            <div className='mx-4'>
            <h4>Arjun Das</h4>
            <p>Dhaka,Bangldesh</p>
            </div>
        </div>
    );
};

export default YogaSiteCart;