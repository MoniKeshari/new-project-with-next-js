import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCard from './CarouselCard';
import useFetchApi from '../fetchapi/FetchApi';
import style from "../../styles/carousel.module.scss";
const CarouselComponent = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const data = useFetchApi();
    return (
        <div className='container-fluid'>
            <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
            >
             
                    {data.map((item: any) => {
                        return (
                                <CarouselCard item={item} key={item.id}/>
                            
                        )
                    })}

                

            </Carousel>
        </div>

    );
};

export default CarouselComponent;