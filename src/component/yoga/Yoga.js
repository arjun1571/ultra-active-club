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
        console.log(item);
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
                <h2>this is cart:{cart.length}</h2>
                <YogaSiteCart></YogaSiteCart>
            </div>
        </div>
    );
};

export default Yoga;