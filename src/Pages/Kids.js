import React from "react";
import './Kids.css'
import Sortby from "../Components/sortby";
import Filters from "../Components/Filters";

export default function Kids() {
    return(
<div>
    
    <div className='bannar'>
    <img src={ require('../Photos/kidsbannar.png')} alt='offers product 1'></img>
    </div>
    <Sortby/>
    <Filters/>

    <div className="Content">
        <img src={ require('../Photos/kids1.webp')} alt='offers product 1'></img>
        <img src={ require('../Photos/kids2.webp')} alt='offers product 2 '></img>
        <img src={ require('../Photos/kids3.webp')} alt='offers product 3 '></img>
        <img src={ require('../Photos/kids4.webp')} alt='offers product 3 '></img>
    </div>

    <div className="Content">
        <img src={ require('../Photos/kids5.webp')} alt='offers product 3 '></img>
        <img src={ require('../Photos/kids6.webp')} alt='offers product 3 '></img>
        <img src={ require('../Photos/kids7.webp')} alt='offers product 3 '></img>
        <img src={ require('../Photos/kids8.webp')} alt='offers product 3 '></img>
   </div>

</div>
    )

}