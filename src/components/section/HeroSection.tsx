import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import CardSection from "./CardSection";
import ShimmerComponent from "../shimmer/Shimmer";
import CarouselComponent from "../carousel/CarouselComponent";
import useFetchApi from "../fetchapi/FetchApi";
const HeroSection = () => {
  const fetchData=useFetchApi();
  return (
    <Layout>
      <div className="container-fluid mt-5">
       <CarouselComponent />

      </div>
      <div className="container mt-3">
        {
          fetchData.length > 0 ? <CardSection dataArray={fetchData} />
            :
            <ShimmerComponent />}


      </div>
    </Layout>
  );
};

export default HeroSection;
