import axios from "axios";
import React, { useEffect } from "react";
import { memo } from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  useEffect(() => {
    axios
      .get(
        "https://04102e02-64bb-4fa0-b312-e7de37fa432a.mock.pstmn.io/HimanshuChauhan5566@gmail.com"
      )
      .then((res) => {
        console.log("Response", res.data);
      });
  }, []);

  return (
    <div className="bg-gray-700 text-white pt-5 pb-5 p-10">
      <div className="my-10 flex flex-col lg:flex-row justify-around gap-5 ">
        <div className="sm:flex justify-between ">
          <div>
            <img
              src="https://trycasuals.com/wp-content/uploads/2019/06/print-favicon-free-img-1.png"
              alt=""
            />
            <div className="flex flex-col gap-7 mt-5">
              <h1 className="text-2xl ">Custom Print Store</h1>
              <div className="flex gap-2 px-4">
                <FaFacebookSquare />
                <FaLinkedin />
                <FaTwitter />
                <FaInstagram />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 max-w-sm">
            <h1 className="text-2xl">
              Get in Touch with Us for the Best Quality Custom Prints &
              Supplies.
            </h1>
            <p>
              Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit,
              sed quia non numquam eius modi tempora incidunt lores ta porro
              ame.
            </p>
          </div>
        </div>

        <div className="sm:flex justify-between">
          <div>
            <h1 className="text-2xl ">Quick Links</h1>
            <p>Know More About Us</p>
            <p>Visit Store</p>
            <p>Let’s Connect</p>
          </div>

          <div>
            <h1 className="text-2xl ">Important Links</h1>
            <p>Privacy Policy</p>
            <p>Shipping Details</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto  sm:flex justify-between">
        <p>Copyright © 2022 | Himanshu</p>
        <p>Powered By Himanshu </p>
      </div>
    </div>
  );
}

export default memo(Footer);
