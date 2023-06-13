import React from "react";
import Sortby from "../Components/sortby";
import Filters from "../Components/Filters";
import './Men.css';
import './Offers.css';



export default function Men() {
    return(
    <div>
    
    <div className='bannar'></div>
       
    <Sortby/>
    <Filters/>

    <div className="Content">
        <img src={ require('../Photos/men1.webp')} alt='offers product 2 '></img>
        <img src={ require('../Photos/Offers1.webp')} alt='offers product 1'></img>
        <img src={ require('../Photos/offers3.webp')} alt='offers product 3 '></img>
        <img src={ require('../Photos/men4.jfif')} alt='offers product 3 '></img>
    </div>

    <div className="Content">
        <img src={ require('../Photos/men5.webp')} alt='offers product 3 '></img>
        <img src={ require('../Photos/men6.webp')} alt='offers product 3 '></img>
        <img src={ require('../Photos/men7.webp')} alt='offers product 3 '></img>
        <img src={ require('../Photos/men8.webp')} alt='offers product 3 '></img>
   </div>
    
    
    
    
</div>
    
    
    
    
    )
}
