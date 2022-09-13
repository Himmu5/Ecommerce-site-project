import React from "react";
import ContantCard from "./ContantCard";

export default function AllCards({data}) {
  
  return (
    <>
    
    <div className="grid sm:grid-cols-3 gap-10 sm:p-20 sm:pt-5 sm:pb-5 mt-5 mb-5">
     
      {
      data.map(function(item){
        return <ContantCard key={item.id} data={item}/>
      })
      }
    </div>
    </>
  );
}