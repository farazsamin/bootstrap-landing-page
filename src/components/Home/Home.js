import React from 'react';
import Sofa from '../images/Sofa 3.png'
const Home = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-6 m-5 p-5 b-5">
                    <h1>Furniture that everyone loves </h1>
                    <p>Get the furniture</p>
                    <button className="btn btn-secondary">Buy Now</button>
                </div>
                <div className="col-md-6">
                    <img style={{width : '70%', height : '100%' ,marginLeft: '95%'}} src={Sofa} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;