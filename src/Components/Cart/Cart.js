import React from 'react';
import Cast from '../Cast/Cast';



const Cart = (props) => {
    const { carts } = props;
    console.log(carts);

    const totalReducer = (previous, character) => previous + character.budget;
    const total = carts.reduce(totalReducer, 0);

    return (
        <div>
            <h4>Character added:{props.carts.length}</h4>
            <h4>Total cost:{total}</h4>
            {
                carts.map(cart => <Cast cart={cart}></Cast>)
            }

        </div>
    );
};

export default Cart;