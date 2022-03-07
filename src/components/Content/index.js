import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import useHttp from "../../hook/useHttp";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ContentItem from "../ContentItem";

function Content({ url, heading }) {
    const { request } = useHttp()
    const [list, setList] = useState([])

    useEffect(() => {
        request(url)
        .then(data => setList(data))
    } , [])

  
    return (
        <div className="content-wrapper" id={heading}>
        <Heading text={heading} />

        <div className="">
            <Swiper spaceBetween={50} slidesPerView={3} breakpoints={{
                0: {
                    slidesPerView: 1
                },

                640: {
                    slidesPerView: 2
                },

                768: {
                    slidesPerView: 3
                }

            }} >
            {list.length > 0 ? (
                    list.map(item => {
                        return (
                        <SwiperSlide key={item.id}>
                            <ContentItem {...item} />
                        </SwiperSlide>)
                    }) ) : <h1>{heading} is not exist!</h1>
            }  
            </Swiper>
        </div>
        </div>
    );
}

export default Content;
