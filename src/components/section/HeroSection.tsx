import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import CardSection from "./CardSection";
import ShimmerComponent from "../shimmer/Shimmer";
// import CarouselComponent from "../carousel/CarouselComponent";

const HeroSection = () => {
  const [apiResponse, setapiResponse] = useState([])
  useEffect(() => {
    fetchData()

  }, [])
  const fetchData = async () => {
    const apiReq = await fetch("https://scrapuncle.w3api.net/v1/meta/blogs");
    const response = await apiReq.json();
    setapiResponse(response)
  }
  console.log(apiResponse, "apiResponse");


  return (
    <Layout>
      <div className="container-fluid mt-5">
        {/* <CarouselComponent /> */}

      </div>
      <div className="container mt-3">
        {
          apiResponse.length > 0 ? <CardSection dataArray={apiResponse} />
            :
            <ShimmerComponent />}


      </div>
    </Layout>
  );
};

export default HeroSection;
