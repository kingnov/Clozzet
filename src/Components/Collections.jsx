import React from "react";
import MensCollection from "../assets/images/mens.png";
import LuxuryWatches from "../assets/images/watches.png";
import HandBag from "../assets/images/hbags.png";
import ladiesCollection from "../assets/images/ladies.png";
import Collection from "./Collection";

export default function Collections() {
  return (
    <div className="container mx-auto grid grid-cols-2 grid-rows-3">
      <div className="bg-[#F0EFEF] row-span-2">
        <Collection
          casual="Casual Collection"
          collection="Mens Collecton" 
          image={MensCollection}
        />
      </div>
      <div className="bg-[#E3F9FB] row-span-1">
        <Collection
          casual="Casual Collection"
          collection="Luxury Watches"
          image={LuxuryWatches}
        />
      </div>
     
      <div className="bg-[#FEDBDB] row-span-2">
        <Collection
          casual="Casual Collection"
          collection="Ladies Collecton"
          image={ladiesCollection}
        />
      </div>
      <div className="bg-[#FFF1F1] row-span-1">
        <Collection
          casual="Casual Collection"
          collection="Handbags"
          image={HandBag}
        />
      </div>
    </div>
  );
}
