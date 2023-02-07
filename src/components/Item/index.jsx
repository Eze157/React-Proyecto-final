import React from 'react';
import './item.css'

const Item = ({info}) => {
return (
    <a href='' className="pasta">
        <img src={info.image} alt="" />
        <p>{info.title}</p>
    </a>
    );
}

export default Item;
