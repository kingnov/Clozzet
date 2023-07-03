import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
export default function Collection({ casual, collection, image }) {
  return (
    <div className="container">
      <div>
        <p>{casual}</p>
        <h4>{collection}</h4>
        <p className="flex"><span>Shop Now</span>  <span><AiFillCaretRight/> </span></p>
        <img src={image} alt="" width={150} />
      </div>
    </div>
  );
}
