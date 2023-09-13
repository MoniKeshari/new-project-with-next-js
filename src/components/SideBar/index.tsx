import Header from "../../common/Header/Header";
import React from "react";
import firsticon from "../../assets/Ellipse 3.svg";
import peoplegroup from "../../assets/mdi_people-group.svg"

import Status from "../../assets/Status Icon.svg"

import symbolchat from "../../assets/material-symbols_chat.svg"

import vertical from "../../assets/vertical.svg"

const SideBar = () => {

const firstHeading=[
    {
    id:1,
    image:firsticon,

   
},
{
    id:2,
    image:peoplegroup,
   

},
{
    id:3,
    image:Status,
   

},
{
    id:4,
    image:symbolchat,
   

},
{
    id:5,
    image:vertical,
    

}
]
  return (
   
      <Header firstHeading={firstHeading} />
   
  );
};

export default SideBar;
