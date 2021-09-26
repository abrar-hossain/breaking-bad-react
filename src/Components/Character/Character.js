import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Character.css';

const Character = (props) => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
    const { name, nickname, img, status, budget, portrayed } = props.character;
    return (
        <div className='character'>
            <img src={img} alt="" />
            <h4>name: {name}</h4>
            <h5>Portrayed: {portrayed}</h5>
            <h5>Nickname: {nickname}</h5>
            <h5>Status: {status}</h5>
            <h5>Wages: {budget}</h5>
            <button
                onClick=
                {() => props.handleAddToCart(props.character)} className='btn-regular'>{cartIcon} Add to cart</button>
        </div>

    );
};

export default Character;