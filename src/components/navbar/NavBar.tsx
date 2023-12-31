import React from "react";
import style from "../../styles/navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux-toolkit/firstslice";
import ButtonComponent from "../button/Button";

const NavBar = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };
  return (
    <div className={`container-fluid ${style.conatiner_wrapper}`}>
      <div className="container">
        <div className={style.main_class}>
          <div className={style.nav_div}>
            <div className={style.first_div}>
              {/* <div className={style.circle_div}> */}
                {/* <div className={style.cir_img}> */}
                  <Image src="/scrapshala-green-logo.png" width={40} height={30} alt="" />
                {/* </div> */}
              {/* </div> */}
              <div className={style.third_div}>  <Link href="/">Home</Link> </div>

            </div>
            <div className={style.third_div}>
              <div>
                <Link href="/pagesRoute/service">Services</Link>
              </div>
              <div>
                <Link href="/pagesRoute/about">About</Link>
              </div>
              <div>
                <ButtonComponent
                  label="Pickup Request"
                  onClickHandler={handleOpenModal}
                  buttonclassname={style.button_custom}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default NavBar;
