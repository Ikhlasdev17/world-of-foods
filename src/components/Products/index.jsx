import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ContentItem from '../ContentItem';

function Products(props) {
    const categoryName = useParams()
    const [products, setProducts] = useState([])
    

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName.name}`)
        .then(res => res.json())
        .then(data => setProducts(data.meals))
    } , [])

    console.log(products);

    return (
        <div className='products'>
            <div className='products__banner'>
                <h1><span>{categoryName.name}</span> category meals</h1>
            </div>
            <div className='products-wrapper'>
                {products.length ? 
                    products.map(meal => {
                        return <ContentItem key={meal.idMeal} {...meal} isBasket={false} />
                    }) : <h1>Loading...</h1>
                }
            </div>
        </div>
    );
}

export default Products;