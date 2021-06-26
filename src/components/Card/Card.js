import React from 'react';
import Chair1 from '../images/Chair 1.png'
import Chair2 from '../images/Chair 2.png'
import Chair3 from '../images/Chair3.png'
const Card = () => {
    return (
        <div className="row m-5 p-5 b-5">
        <div className="col-md-3">
        <div class="card" style={{width: '18rem'}}>
                
                <div class="card-body">
                    <h5 class="card-title">Why are we best in town?</h5>
                    <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ab eligendi asperiores suscipit minus minima. Perferendis est porro voluptates accusantium commodi quisquam numquam aliquid odit delectus unde dolores voluptatem deserunt voluptas excepturi ratione at exercitationem recusandae fugit ea, consectetur voluptate ullam veritatis veniam? Delectus accusamus, libero nisi harum recusandae totam.</p>
                    
                </div>
            </div>
        </div>
       <div className="col-md-3">
        <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={Chair1} alt="Card cap" />
                <div class="card-body">
                <h5 class="card-title">Chair 1 </h5>
                    <p class="card-text">$100</p>
                    
                </div>
            </div>
        </div>
        <div className="col-md-3">
        <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={Chair2} alt="Card cap" />
                <div class="card-body">
                    <h5 class="card-title">Chair 2 </h5>
                    <p class="card-text">$100</p>
                    
                </div>
            </div>
        </div>
        <div className="col-md-3">
        <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={Chair3} alt="Card cap" />
                <div class="card-body">
                <h5 class="card-title">Chair 3 </h5>
                    <p class="card-text">$100</p>
                    
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default Card;