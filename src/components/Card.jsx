import React from 'react';
import 'tachyons';

const Card = () =>{
    return(
        <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow5">
            <img src='https://robohash.org/robos?200x200' alt="robots"/>
            <div>
                <h2>Jane Doe</h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>
    );
}
export default Card;