import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';
import './itemDetail.css';
import { useCartContext } from '../../CartContext';

const ItemDetail = ({ data }) => {
    const [goToCart, setgoToCart] = useState(false);

    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setgoToCart(true);
        addProduct(data, quantity);
}

return (
    <div className="container">
        <div className="detail">
            <img className="detail_img" src={data.image} alt="" />
            <div className="content">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                {
                    goToCart
                    ? <Link to='/cart' className='buy'>Terminar compra</Link>
                    :<ItemCount initial={0} stock= {5} onAdd= {onAdd}/>
                }
            </div>
        </div>
    </div> 
    );
}

export default ItemDetail; 
