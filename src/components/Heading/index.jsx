import React from 'react';

function Heading({text}) {
    return (
        <h1 className='heading'>
            Our <span>{text}</span>
        </h1>
    );
}

export default Heading;