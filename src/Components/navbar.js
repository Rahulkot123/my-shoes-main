import React from "react";
import '../App.css';
import logo from  '../Photos/logo.jpg';

export default function Navbar(){
    return <div>
        <header className='topnav'>
            <img src={logo} alt='logo'/>
            <a href='/'>Home</a>
            <a href='Offers'>Offers</a>
            <a href='Men'>Men</a>
            <a href='Women'>Women</a>
            <a href='kids'>Kids</a>
            <a href='Accessories'>Accessories</a>
            <a href='login'>Login</a>
            <a href='Signup'>Signup</a>
            <a href='Contact'>Contact</a>
            <img src={ require('../Photos/login.png')}alt='login button'/>
            <img src={ require('../Photos/phone.png')}alt='contact page button'/>
            <img src={ require('../Photos/basket.png')} alt='basket button'/>
            <img src={ require('../Photos/Map.png')} alt='map hyperlink'/>
        </header>

        <header className='searchBar'>
            <input placeholder='Search Items Here'/>
        </header>
    </div>

}
