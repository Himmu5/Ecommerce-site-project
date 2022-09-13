import React from "react";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ContantCard({ data }) {
  return (
    <div className="p-3 sm:shadow-md">
      <Helmet>
        
        <meta charSet="utf-8" />
        <title>{data.title}</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Our doorstep delivery site" />
        <meta
          property="og:description"
          content="This is our e-commerce site we have a large category of products like clothing, shoes, Electronics"
        />

      </Helmet>

      <div className=" aspect-square">
        <img
          className="h-full w-full object-cover "
          src={data.thumbnail}
          alt=""
        />
      </div>
      <div className="space-y-1 text-sm">
        <p className="text-gray-400 ">{data.category}</p>
        <h1 className="font-bold  text-gray-800">{data.title}</h1>
        <div className="flex">
          <FcRating />
          <FcRating />
          <FcRating />
          <FcRating />
          <FcRating />
        </div>
        <div className="sm:flex sm:justify-between text-red-400 ">
          <p className="font-bold text-sm text-gray-800">${data.price}.00</p>
          <Link to={"/Component/Cards/Card/" + data.id} className="underline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
