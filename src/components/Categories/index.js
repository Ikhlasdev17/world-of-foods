import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import useHttp from "../../hook/useHttp";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ContentItem from "../ContentItem";

function Categories({heading}) {
    const [list, setList] = useState([])
    const { request } = useHttp()
    
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php/')
        .then(res => res.json())
        .then(data => setList(data.categories))
    }, [])

    return (
        <div className="content-wrapper">
        <Heading text={heading} />

        <div className="categories-wrapper">
            {list.length > 0 ? (list.map(item => (
                        <ContentItem key={item.idCategory} {...item} />
            ))) : (<h1>{heading} is not exist!</h1>)
            }  
        </div>
        </div>
    );
}

export default Categories;