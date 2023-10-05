import React from "react";
import CardComponent from "../card/Card";
import style from "../../styles/card.module.scss";
const CardSection = ({ dataArray }: { dataArray: any }) => {
  return (
    <>
      <div className="row">
        {dataArray?.map((item: any, index: number) => (
          <div key={index} className="col-md-4 col-sm-12">
            <CardComponent
              key={index}
              cardWrapperClass={style.card_wrapper}
              cardImageTag={style.cardImageDiv}
              cardContentTag={style.cardContentDiv}
              cardTitle={style.cardTitle}
              cardContent={style.cardContent}
              images={item?.yoast_head_json?.og_image}
              title={item.yoast_head_json?.og_title}
              content={item.yoast_head_json.description}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CardSection;
