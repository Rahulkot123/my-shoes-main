import React from "react";
import './Accessories.css'
import Sortby from "../Components/sortby";
import Filters from "../Components/Filters";

export default function Accessories (){
    return(
<div>
    <div className='bannar'></div>
    <Sortby/>
    <Filters/>

</div>
    )
}