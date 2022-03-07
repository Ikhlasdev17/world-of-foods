import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {addToCart, removeFromCart} from "../../redux/actions";
import swal from 'sweetalert';


function ContentItem({id, title, description, image, name, strCategory, strCategoryDescription, strCategoryThumb, strMeal, strMealThumb, idMeal, isBasket}) {
    const dispatch = useDispatch()
    const basket = useSelector(state => state.basket)
    const handleClick = (id) => {
        const data = {
            idMeal,
            strMeal,
            strMealThumb
        }
        const findMeal = basket.findIndex(item => item.idMeal === id)
        if(findMeal === -1){
            dispatch(addToCart(data))
            swal('Success', 'Meal added to Favourites', 'success')
        }
        console.log(findMeal)
        
    }
    
    const handleRemoveClick = (id) => {
        dispatch(removeFromCart(id))
        console.log(id)
        swal('Removed','Meal Removed From Favourites', 'info')
    }
    return (
            <div className='card'>
                <Link to={strCategory ? `/category/${strCategory}` : idMeal ?  `/meal/${idMeal}` :   '/' }>
                <img 
                    src={image ? image : strCategoryThumb ? strCategoryThumb : strMealThumb} 
                    alt={title ? title : name ? name : strMeal ? strMeal : strMeal}
                    style={ name ? { width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' } : strMealThumb ?  { width: '100%', height: '25rem', borderRadius: '1rem' } : { }}
                />
                </Link>
    
                <div className='card-body'>
                    <h1>{title}</h1>
                    {description && <p>{description}</p>}
                    {strMeal && <h2>{strMeal}</h2>}
                    {name && <h1>{name}</h1>}
                    {strCategory && <h1>{strCategory}</h1>}
                    {title && <button className='btn btn-outline-dark' onClick={() => {swal('Comming soon','This menu is not defined', 'info')}}>Read More</button>}
                    <br />
                    {(strMealThumb) ? isBasket ? <button className={'btn btn-outline-dark'} onClick={() => handleRemoveClick(idMeal)}>Remove</button>  :
                        <button className={'btn btn-outline-dark'} onClick={() => handleClick(idMeal)}>Favourite</button> : ''}
                </div>
            </div>
    );
}

export default ContentItem;