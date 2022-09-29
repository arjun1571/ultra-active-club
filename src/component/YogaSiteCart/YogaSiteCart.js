
// import BreakTime from '../BreakTime/BreakTime';
import { useState,useEffect } from "react";
import BreakTime from "../BreakTime/BreakTime";
import profile from "../image/101.jpg"
import "./YogaSiteCart.css"

const YogaSiteCart = () => {
    const [time,setTime]=useState([]);
    useEffect(()=>{
        fetch("time.json")
        .then(res=>res.json())
        .then(data => setTime(data))
    },[])
    return (
        <div >
            <div className='site-cart'>
            <img className='rounded-circle' src={profile} alt="" />
            <div className='mx-4'>
            <h4>Arjun Das</h4>
            <p>Dhaka,Bangldesh</p>
            </div>
            </div>
            <div className='site-cart mt-4 bg-color p-3 rounded'>
                <h3>81 kg</h3>
                <h3>5.11 inc</h3>
                <h3>22 year</h3>
            </div>
            <div className="mt-5">
            <h3>Add A Break</h3>
            <div className="time-style">
            {
                    time.map(time=><BreakTime key={time.id} time={time}></BreakTime>)
            }
            </div>
            </div>
        </div>
    );
};

export default YogaSiteCart;