import Image from 'next/image'
import React from 'react'
import style from "../../styles/carousel.module.scss";
const CarouselCard = ({ item }: { item: any }) => {
    console.log(item, "check");

    return (
        <>
            {item?.yoast_head_json?.og_image.map((item: any) => {
                return (
                    <div key={item.id}  className={style.image_source}>
                        
                            <Image src={item.url} alt="images" width={100} height={100} />

                        
                    </div>

                )
            })}

        </>


    )
}

export default CarouselCard