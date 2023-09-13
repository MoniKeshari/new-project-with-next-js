import Image from "next/image";
import React from "react";
import style from "../../styles/header.module.scss";
const Header = ({
  firstHeading,
}: {
  firstHeading: any;
}) => {

  return (
    <div className={`row ${style.main_header}`}>
      <div className="col-2 col-md-2">
        <div className={style.first_div}>
        <div className={style.first_col_div}>
        <Image
          src={firstHeading[0].image}
          alt="img"
          key={firstHeading[0].id}
          width={45}
          height={45}
        />
        </div>
       <div>
       {/* {firstHeading[0].text && ( */}
       <span className={style.text_head}>{firstHeading[0].text}</span>
       {/* ) }  */}
       </div>
        </div>
        
     
      </div>
      <div className="col-4 col-md-4">
        <div className={style.sec_column}>
        {firstHeading.slice(1).map((item: any) => (
          <div key={item.id}>
            <Image
              src={item.image}
              alt="img"
              key={item.id}
              width={24}
              height={24}
            />
          </div>
        ))}
        </div>
       
      </div>
    </div>
  );
};

export default Header;
