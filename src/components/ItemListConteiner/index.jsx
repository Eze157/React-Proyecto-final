import React from 'react';
import Title from '../Title'; 
import ItemCount from '../ItemCount';

const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
}

const ItemListContainer = ({texto}) => {
    return (
    <>
    <Title greeting={texto} />
    <ItemCount initial={0} stock= {5} onAdd= {onAdd}/>
    </>
    )
}

export default ItemListContainer;
