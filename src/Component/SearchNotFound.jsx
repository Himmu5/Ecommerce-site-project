import React, { memo } from "react";
import { Link } from "react-router-dom";

 function SearchNotFound() {
  return (
    <div className="flex justify-center pt-32 pb-20">
      <div className="text-5xl text-gray-400">No Product Found</div>
    </div>
  );
}

export default memo(SearchNotFound);
