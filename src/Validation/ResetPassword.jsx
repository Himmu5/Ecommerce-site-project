import { useFormik } from "formik";
import { Link } from "react-router-dom";
import React, { memo } from "react";
import * as Yup from "yup";

function ResetPassword() {
  const schema = Yup.object().shape({
    email: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
  });

  return (
    <div className="py-40 h-screen">
      <div className=" max-w-5xl mx-auto p-4 sm:p-20 bg-white space-y-3 flex flex-col">
        <p className="text-red-500">Reset Password</p>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter Username or Email "
          className="border px-4 py-2"
        />
        <div className="">
          <button className="px-4 py-2 bg-red-500 text-white rounded-md">
            Reset Password
          </button>
          
        </div>
        
      </div>
    </div>
  );
}
export default memo(ResetPassword);
