import { useState, useEffect } from 'react';
import './itemCount.css';

import React from 'react';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount]= useState(parseInt(initial));

    const decrease = () =>{
        setCount (count - 1);
    }

    const increase = () =>{
        setCount (count + 1);
    }

    useEffect (() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
    <div className='counter'>
        <button disabled={count <= 0} onClick={decrease} className = "decrease">-</button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={increase} className = "increase">+</button>
        <div>
        <button disabled= {stock <= 0} onClick={() => onAdd(count)} className = "cart">Agregar al carrito</button>
        </div>
    </div>
    )
}

export default ItemCount;
