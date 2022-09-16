import React, { useEffect } from "react";
import AllCards from "./Cards/AllCards";
import ButtonNumber from "./NextButton/buttonNumber";
import { ApiDataDummy } from "./Api";
import { useState } from "react";
import Loading from "./Cards/Loading";
import DataNotFound from "./DataNotFound";
import { BiSearch } from "react-icons/bi";
import SearchNotFound from "./SearchNotFound";

export default function MainContant() {
  const [data, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  let ApiData = data;
  useEffect(function () {
    let mydata = ApiDataDummy();
    mydata
      .then(function (response) {
        setApiData(response.data.products);
        setLoading(false);
      })
      .catch(function () {
        setLoading(false);
      });
  });

  const [Query, setQuery] = useState("default Sort");

  const [searchQuery, setsearchQuery] = useState("");

  ApiData = ApiData.filter(function (item) {
    return item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
  });

  // if(ApiData.length==0){
  //     return <Loading/>
  // }


  if (Query == "LtoH") {
    ApiData.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (Query == "HtoL") {
    ApiData.sort(function (x, y) {
      return y.price - x.price;
    });
  } else if (Query == "name") {
    ApiData.sort(function (x, y) {
      return y.title < x.title ? 1 : -1;
    });
  }

  function HandleSearch(e) {
    setsearchQuery(e.target.value);
  }
  function handleOnchange(e) {
    setQuery(e.target.value);
  }

  // console.log(ApiData.length);

  return data.length>1 ? (
    <div className="">
      <div className="ml-5 mr-5 sm:max-w-6xl sm:mx-auto sm:pl-5 sm:pr-5 sm:pt-5 sm:pb-5  mt-16 mb-16 bg-white shadow-md ">
        <div className="p-3 sm:p-20 sm:pt-10 sm:pb-0 space-y-5 ">
          <h1 className="text-3xl text-red-400"> Shop</h1>
          <div className="sm:flex sm:justify-between space-y-3 sm:space-y-0">
            <h1>Showing 1-9 of 11 results</h1>
            <div className="space-y-3 sm:space-y-0 sm:flex gap-3">
              <div className="flex items-center hidden md:block">
                
                <input
                  type="text"
                  value={searchQuery}
                  placeholder="Search product"
                  className="border relative pt-2 pb-2 pl-7 pr-3 "
                  onChange={HandleSearch}
                  
                />
                {/* <BiSearch className=" pl-1 pr-1 text-2xl -mr-3"/> */}
              </div>
              <select
                id=""
                value={Query}
                onChange={handleOnchange}
                className="pl-3 pr-3 md:pl-6 md:pr-6 pt-2 pb-2 border border-gray-300"
              >
                <option value="Default">Default Sort</option>
                <option value="LtoH">Sort By price : Low To High</option>
                <option value="HtoL">Sort By price : High To Low </option>
                <option value="name">Sort By Name</option>
              </select>
            </div>
          </div>
        </div>

        {ApiData.length === 0 && <SearchNotFound />}
        <AllCards data={ApiData} />

        <div className="flex gap-3 p-3 pt-10 sm:pl-20">
          <ButtonNumber value={1} />
          <ButtonNumber value={2} />
          <ButtonNumber value={"..."} />
        </div>
      </div>
    </div>
  ) : loading ? (
    <Loading />
  ) : (
    <DataNotFound />
  );
}
