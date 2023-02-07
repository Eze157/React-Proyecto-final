import React from 'react';
import Item from '../Item';

const ItemList = ({data= []}) => {
return (    
    data.map(pasta => <Item key={pasta.id} info={pasta} />)
    );
}

export default ItemList;
