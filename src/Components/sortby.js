import React from "react";
import '../Pages/Offers.css';

export default function Sortby() {
    return(
        <div className='sortby'>
            <label for="sort by">sort by</label>
            <select name="sort by" id="sort by">
                <option value="Recommended">Recommened</option>
                <option value="Latest in">Latest in</option>
                <option value="Name (A to Z)">Name (A to Z)</option>
                <option value="Name (z to A)">Name (Z to A)</option>
                <option value="Price (Low to High)">Price (Low to High)</option>
                <option value="Price (High to low)">Price (High to low) </option>
            </select>
        </div>
    )
}

