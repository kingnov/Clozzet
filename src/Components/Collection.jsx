import React from "react";
           
export default function Collection({casual, collection,shop, image}){
    return(
        <div className="container">
            
            <div>
               <p>{casual}</p>
                <h4>{collection}</h4>
                <p>{shop}</p>
                <img src={image} alt="" />
            </div>
            
         </div>
    )
}