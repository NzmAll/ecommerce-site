import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt esse
          ratione numquam in commodi unde sapiente recusandae optio quas
          cupiditate vitae quidem adipisci laudantium, nisi iste dicta! Dolorem
          pariatur enim quos. Aliquid quisquam corporis facilis, provident
          expedita fugit iusto id?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          corrupti maxime, saepe recusandae et nam repellendus iusto eaque atque
          velit illum dolorem est numquam placeat vero. Rerum, provident.
          Sapiente, soluta.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
