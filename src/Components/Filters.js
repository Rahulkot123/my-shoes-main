import React from "react";
import '../Pages/Offers.css';

export default function Filters() {
    return(
        <div className="Filters">
            <div className='Brand'>
                <label for="Brand">Brand</label>
                <select name="Brand" id="Brand">
                    <option value="None ">None</option>
                    <option value="Nike ">Nike</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Adidas Orginal">Adidas Orginal</option>
                    <option value="Fila">Fila</option>
                    <option value="Puma">Puma </option>
                    <option value="Mckenzie">Mckenzie </option>
                    <option value="Jordans">Jordans</option>
                    <option value="Vans">Vans</option>
                    <option value="Timberlands">Timberlands</option>
                    <option value="Converses">Converses</option>
                </select>
            </div>

            <div className='Colour'>
                <label for="Colour">Colour</label>
                <select name="Colour" id=" Colour">
                    <option value="None ">None</option>
                    <option value="Black">Black</option>
                    <option value="Grey">Grey</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Brown">Brown</option>
                    <option value="White">White</option>
                </select>
            </div>

            <div className='Size'>
                <label for="Size">Size</label>
                <select name="Size" id="Size">
                    <option value="None ">None</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                </select>
            </div>
            <div className='Price'>
                <label for="Price">Price</label>
                <select name="Price" id="Price">
                    <option value="None ">None</option>
                    <option value="10-20">£10-£20</option>
                    <option value="20-30">£20-£30</option>
                    <option value="30-40">£30-£40</option>
                    <option value="40-50">£40-£50</option>
                    <option value="50-60">£50-£60</option>
                    <option value="60-70">£60-£70 </option>
                    <option value="70-80">£70-£80 </option>
                    <option value="80-90">£80-£90 </option>
                    <option value="90-max">£90-max </option>
                </select>
            </div>
        </div>
        

        

    )
}