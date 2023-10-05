import Image from 'next/image';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "../../styles/carousel.module.scss"
const CarouselComponent = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (

        <Carousel responsive={responsive}>
            {/* Add your carousel items here */}
            {/* <Image src="/scrap_images/image1.jpg" alt="img" width={200} height={200} className={style.imgtag} />
            <Image src="/scrap_images/image2.jpg" alt="img" width={200} height={200} className={style.imgtag} />
            <Image src="/scrap_images/image3.jpg" alt="img" width={200} height={200} className={style.imgtag} />
            <Image src="/scrap_images/image4.jpg" alt="img" width={200} height={200} className={style.imgtag} />
            <Image src="/scrap_images/image5.jpg" alt="img" width={200} height={200} className={style.imgtag} />
            <Image src="/scrap_images/image6.jpg" alt="img" width={200} height={200} className={style.imgtag} /> */}
            {/* Add more slides as needed */}
        </Carousel>



    )
}

export default CarouselComponent