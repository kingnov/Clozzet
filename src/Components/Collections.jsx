import React from "react";
import MensCollection from "../assets/images/mens.png"
import LuxuryWatches from "../assets/images/watches.png"   
import HandBag from "../assets/images/hbags.png"      
import ladiesCollection from "../assets/images/ladies.png"   
import Collection from "./Collection";

export default function Collections(){
    return(
        <div className="container flex mt-4 grid-cols-2 grid-rows-2">
            < Collection casual="Casual Collection" collection="Mens Collecton" shop="Shop Now" image={MensCollection}/>
            <Collection casual="Casual Collection" collection="Mens Collecton" shop="Shop Now" image={LuxuryWatches}/>
            <Collection casual="Casual Collection" collection="Mens Collecton" shop="Shop Now" image={HandBag}/>
            <Collection casual="Casual Collection" collection="Mens Collecton" shop="Shop Now" image={ladiesCollection}/>
        </div>  

    )
}