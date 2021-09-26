import React, { useEffect, useState } from 'react';
import './Select.css'
import Character from '../Character/Character';
import Cart from '../Cart/Cart';


const Select = () => {
    const [characters, setCharacters] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./tools.JSON')
            .then(res => res.json())
            .then(data => setCharacters(data))
    }, []);
    const handleAddToCart = (character) => {
        const newCart = [...cart, character];
        setCart(newCart);
    }
    return (
        <div className="select-container">
            <div className="character-container">
                {
                    characters.map(character => <Character key={character.id} character={character} handleAddToCart={handleAddToCart}></Character>)
                }
            </div>
            <div className="cart-container">
                <Cart carts={cart}></Cart>
            </div>
        </div>
    );
};

export default Select;