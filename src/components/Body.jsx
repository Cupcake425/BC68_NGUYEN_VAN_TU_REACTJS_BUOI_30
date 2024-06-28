import React from "react";
import Banner from "./Banner";
import Item from "./Item";

import {
  faEthernet,
  faCloudUploadAlt,
  faCreditCard,
  faBox,
  faCode,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const Body = () => {
  const items = [
    {
      h2: "Fresh new layout",
      p: "With Bootstrap 5, we've created a fresh new layout for this template!",
      icon: faEthernet,
    },
    {
      h2: "Free to download",
      p: "As always, Start Bootstrap has a powerful collectin of free templates.",
      icon: faCloudUploadAlt,
    },
    {
      h2: "Jumbotron hero header",
      p: "The heroic part of this template is the jumbotron hero header!",
      icon: faCreditCard,
    },
    {
      h2: "Feature boxes",
      p: "We've created some custom feature boxes using Bootstrap icons!",
      icon: faBox,
    },
    {
      h2: "Simple clean code",
      p: "We keep our dependencies up to date and squash bugs as they come!",
      icon: faCode,
    },
    {
      h2: "A name you trust",
      p: "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
      icon: faCheck,
    },
  ];
  return (
    <>
      <Banner />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-12">
          {items.map((item, index) => (
            <div key={index}>
              <Item h2={item.h2} p={item.p} icon={item.icon} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
