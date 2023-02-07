import React, {useState, useEffect} from 'react';
import Title from '../Title'; 
import ItemCount from '../ItemCount';
import ItemList from '../ItemList';

const films = [
    {id:1, image:"https://img-global.cpcdn.com/recipes/e723286592e88d52/400x400cq70/photo.jpg", title: "Sorrentinos"},
    {id:2, image:"https://d320djwtwnl5uo.cloudfront.net/recetas/share/60ebed4d4c137906d6f1a5761d0d735c_3_3_photo.png", title: "Ravioles"},
    {id:3, image:"https://i.blogs.es/02640c/cacio-e-pepe/450_1000.jpg", title: "Spaghetti"},
    {id:4, image:"https://cdn.shopify.com/s/files/1/0392/3646/8781/products/SHE0967_1000x.jpg?v=1613443025", title: "Panzotti"}
]

const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    useEffect(()=> {
        const getData = new Promise(resolve => {
            setTimeout(()=>{
                resolve(films);
            }, 3000)
        });
        getData.then(res => setData(res));

    }, [])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
}

    return (
    <>
    <Title greeting={texto} />
    <ItemCount initial={0} stock= {5} onAdd= {onAdd}/>
    <ItemList data={data} />
    </>
    );
}

export default ItemListContainer;
