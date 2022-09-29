import React from 'react';
import "./Quation.css"

const Quation = () => {
    return (
        <div className='mt-5 '>
            <h1 className='quation'>some Quation ans</h1>
            <div className='quation-ans'>
                <h2>how react works ??</h2>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes</p>
                <h2>difference props and state react ??</h2>
                <p>The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.</p>
                <h2>How many ways we can call API in React?</h2>
                <p>From the API we have target “userId”, “id”, “title”, “completed” and fetch the data from API endpoints. Below is the stepwise implementation of how we fetch the data from an API using 3 different ways in react.</p>
            </div>
            
        </div>
    );
};

export default Quation;