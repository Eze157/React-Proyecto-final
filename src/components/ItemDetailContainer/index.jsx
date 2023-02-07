import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';

const pastas = [
    {id:1, image:"https://img-global.cpcdn.com/recipes/e723286592e88d52/400x400cq70/photo.jpg", category: 'pastas', title: "Sorrentinos"},
    {id:2, image:"https://d320djwtwnl5uo.cloudfront.net/recetas/share/60ebed4d4c137906d6f1a5761d0d735c_3_3_photo.png", category: 'pastas', title: "Ravioles"},
    {id:3, image:"https://i.blogs.es/02640c/cacio-e-pepe/450_1000.jpg", category: 'pastas', title: "Spaghetti"},
    {id:4, image:"https://cdn.shopify.com/s/files/1/0392/3646/8781/products/SHE0967_1000x.jpg?v=1613443025", category: 'pastas', title: "Panzotti"},
    {id:5, image:"https://es.cravingsjournal.com/wp-content/uploads/2019/08/salsa-bolon%CC%83esa-1.jpg", category: 'salsas', title: "Salsa Boloñesa"},
    {id:6, image:"https://www.hogarmania.com/archivos/201105/salsa-rosa-xl-668x400x80xX.jpg", category: 'salsas', title: "Salsa Rosa"},
    {id:7, image:"https://comohacersalsa.com/wp-content/uploads/2021/08/salsa-fileto.jpg", category: 'salsas', title: "Salsa Fileto"},
];

const ItemDetailContainer = () => {
    const [data, setData] = useState ({});

    const {detalleId} = useParams ();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(pastas);
            }, 1000);
        });

        getData.then(res => setData(res.find(pasta=> pasta.id === parseInt(detalleId))));
    }, []) 

    return (
    <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;
