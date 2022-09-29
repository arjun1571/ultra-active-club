import React from 'react';

const BreakTime = (props) => {
    const {time}=props.time;
   
    return (
        <div className='mx-3 mt-3'>
            <h3>{time}</h3>
        </div>
    );
};

export default BreakTime;