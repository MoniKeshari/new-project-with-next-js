import React from "react";
import Layout from "../layout/Layout";
import ModalData from "../modal/ModalData";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";
import { closeModal } from "@/redux-toolkit/firstslice";
import data from "../../data.json";
import CardSection from "./CardSection";

const HeroSection = () => {
  const { isOpen } = useSelector((state: RootState) => state.modalSlice);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <Layout>
      <div>
        <ModalData
          isOpen={isOpen}
          handleCloseModal={handleCloseModal}
          title="Contact Form"
        />
      </div>
      <div className="container">
        <CardSection dataArray={data}/>
      </div>
    </Layout>
  );
};

export default HeroSection;
