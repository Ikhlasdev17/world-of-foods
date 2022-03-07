import React from 'react';

function Hero(props) {
    return (
        <div className='hero'>
           <div className='content'>
           <h1>Fresh And <span>Organic</span> Products For You</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
            <button className='btn btn-outline-dark'>Shop Now</button>
           </div>
        </div>
    );
}

export default Hero;