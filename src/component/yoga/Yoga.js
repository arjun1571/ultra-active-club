import React, { useEffect, useState } from 'react';
import YogaCart from '../YogaCart/YogaCart';
import YogaSiteCart from '../YogaSiteCart/YogaSiteCart';
import "./Yoga.css"

const Yoga = () => {
    const [data,setData]=useState([]);
    const [cart,setCart]=useState([]);

    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data => setData(data))
    },[])

    const handelAddToCart=(item)=>{
        const newCart=[...cart,item];
        setCart(newCart);
    }
    return (
        <div className='container'>
            <div className="yoga-container">
                {
                    data.map(data=><YogaCart data={data} key={data.id} handelAddToCart={handelAddToCart}></YogaCart>)
                }
            </div>
            <div className="cart">
                <YogaSiteCart></YogaSiteCart>
                <h2 className='mt-5'>Exercise Details</h2>
                <div>
                    <h5 className='time-style'>Exercise time </h5>
                    <h5 className='time-style'>Break time</h5>
                    <button className='button-cart mt-2'>Activity Compleate</button>
                </div>
                
                
            </div>
        </div>
    );
};

export default Yoga;