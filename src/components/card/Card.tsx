import Image from "next/image";
import React from "react";

const CardComponent = ({
  cardWrapperClass,
  cardImageTag,
  cardContentTag,
  cardTitle,
  cardContent,
  images,
  content,
  title,
}: {
  cardWrapperClass?: string;
  cardImageTag?: string;
  cardContentTag?: string;
  cardTitle?: string;
  cardContent?: string;
  images?: any;
  content?: string;
  title?: string;
}) => {
  console.log(title, "title", images, "images");

  return (
    <>
      <div className={`${cardWrapperClass}`}>
        <div className={`${cardImageTag}`}>
          {images?.map((item: any, index: number) => (
            <Image key={index} src={item.url} alt="images" width={274} height={300} />

          )
          )}

        </div>

        <div className={cardContentTag}>
          <div className={cardTitle}>{title}</div>
          <div className={cardContent}>{content}</div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
