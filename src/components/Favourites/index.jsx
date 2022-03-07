import React from 'react';
import Heading from "../Heading";
import {useSelector} from "react-redux";
import ContentItem from "../ContentItem";
import Empty from "../Empty";

function Favourites(props) {
    const basket = useSelector(state => state.basket)
    
    return (
      <div className={'favourite-wrapper'}>
          <div className='products__banner'>
              <h1><span>Your</span> Favourite Meals</h1>
          </div>
          <div className={basket.length > 0 && 'favourites'}>
              {basket.length > 0 ? (
                basket.map(item => {
                    return <ContentItem key={item.idMeal}  {...item} isBasket={true} />
                })
              ) : (
                <Empty />
              )}
          </div>
      </div>
    );
}

export default Favourites;