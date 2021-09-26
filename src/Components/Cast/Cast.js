import React from 'react';
import './Cast.css'

const Cast = (props) => {
    const { name, nickname } = props.cart
    return (
        <div className='cast'>
            <h4>Name: {name}</h4>
            <h5>Character name: {nickname}</h5>
        </div>
    );
};

export default Cast;