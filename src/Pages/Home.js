import React from "react";
import '../App.css';

export default function Home() {
    return( 
        <div>
            <div className='bannar'>
                <img src={ require('../Photos/Homebannar.png')} alt='nike '></img>
            </div>

            <h2>Shop Your Favorite brand</h2>
            <div className='brands'>
                <img src={ require('../Photos/adidas.jpg')} alt='adidas'></img>
                <img src={ require('../Photos/nike.jpg')} alt='nike '></img>
                <img src={ require('../Photos/filia.jpg')} alt='fila '></img>
            </div>
            
            <h2>Currently Trending Today</h2>
            <div className='brands'>
                
                <img src={ require('../Photos/trending1.webp')} alt='adidas terrex'></img>
                <img src={ require('../Photos/trending2.png')} alt='Black Jordan air-1 low '></img>
                <img src={ require('../Photos/trending3.png')} alt='white-DC-shoes high '></img> 
            </div>
            
            <footer className='homefooter'>
            
                <p>phone number</p>
                <p>Address</p>
                <p>harrowstore@myshoes.com</p>
                
            
            </footer>

        </div>
    )
}