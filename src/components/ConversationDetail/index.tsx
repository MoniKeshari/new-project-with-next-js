import Header from "../../common/Header/Header";
import React from "react";
import vertical from "../../assets/vertical.svg";
import roundcall from "../../assets/ic_round-call.svg";
import firsticon from "../../assets/Ellipse 4.svg";

import search from "../../assets/mingcute_search-line.svg";

import video from "../../assets/carbon_video-filled.svg";

const ConversationDetail = () => {
  const firstHeading = [
    {
      id: 1,
      image: firsticon,
      text: "Daniel Kalio",
    },
    {
      id: 2,
      image: roundcall,
    },
    {
      id: 3,
      image: video,
    },
    {
      id: 4,
      image: search,
    },
    {
      id: 5,
      image: vertical,
    },
  ];

  return (
    <div>
      <Header firstHeading={firstHeading} />
    </div>
  );
};

export default ConversationDetail;
