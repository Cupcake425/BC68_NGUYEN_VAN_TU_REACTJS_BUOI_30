import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = ({ h2, p, icon }) => {
  return (
    <div className="item">
      <div className="item_body">
        <div className="item_icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h2>{h2}</h2>
        <p>{p}</p>
      </div>
    </div>
  );
};

export default Item;
