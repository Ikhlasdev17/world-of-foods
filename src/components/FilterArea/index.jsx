import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import ContentItem from "../ContentItem";
import Loading from "../Loading";

function FilterArea(props) {
    const areaName = useParams()
    const [meals, setMeals] = useState([])
    console.log(areaName)
    useEffect(async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName.area}`)
        const data = await res.json()
        setMeals(data.meals)
        console.log(data)
    } , [areaName])
    
    return (
      <>
          <div className={'products__banner'}>
              <h1>The <span>{areaName.area}</span> of Meals</h1>
          </div>
          <div className='products-wrapper'>
              { meals &&
                  meals.length ?
                    meals.map(item => {
                        return <ContentItem key={item.idMeal} {...item} />
                    }) : <h1>Loading...</h1>
              }
          </div>
      </>
    );
}

export default FilterArea;