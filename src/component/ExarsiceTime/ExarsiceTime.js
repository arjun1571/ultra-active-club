import React from 'react';

const ExarsiceTime = (props) => {
   
    const cart=props.cart;
    console.log(cart);
    let total = 0;
    for(const singleCart of cart){
        total = total + parseInt(singleCart.time);
        

;    }
    return (
        <div className='time-style mb-3'>
            <h5>Exarsice Time: {total} scounds</h5>
            
        </div>
    );
};

export default ExarsiceTime;