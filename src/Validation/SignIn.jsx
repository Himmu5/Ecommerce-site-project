import { useFormik } from "formik";
import React, { memo } from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";


function SignIn() {
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
  });


  function Submit() {
    console.log(
      "Data is sending ",
      formik.values.email,
      formik.values.password
    );
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: Submit,
    validationSchema: schema,
  });

  return (
    <div className="my-10 sm:p-20 p-4 space-y-5  text-sm font-bold bg-white text-gray-700 max-w-5xl mx-auto md:text-base">
      
      <h1 className="text-2xl ">Login</h1>
      <form
        className="p-6 flex flex-col space-y-3 border"
        onSubmit={formik.handleSubmit}
      >
        <AiOutlineUser className="text-2xl relative top-[78px] left-3 " />
        <p>Username or email address *</p>
        <input
          type="email"
          className="border px-4 py-2"
          name="email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeholder=""
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-400 ">{formik.errors.email}</div>
        )}
        <p>Password</p>
        <input
          type="password"
          className="border px-4 py-2"
          name="password"
          value={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        <RiLockPasswordLine className="text-2xl relative bottom-[44px] left-3 " />
        {formik.touched.password && formik.errors.password && (
          <div className="text-red-400 ">{formik.errors.password}</div>
        )}
        <div className="space-y-1">
          <div className="flex space-x-2">
            <input type="checkbox" id="" />
            <p>remember me</p>
          </div>
          <button
            className="px-8 py-2 bg-red-400 rounded-md text-white"
            type="Submit"
          >
            LOG IN
          </button>
        </div>
        <div className="flex justify-between text-red-500 ">
          <Link
            to="/component/validation/ResetPassword"
            className="text-red-500 text-[100%]"
          >
            Lost your password?
          </Link>
          <Link to="/component/validation/SignUp">Create New Account</Link>
        </div>
      </form>
    </div>
  );
}
export default memo(SignIn);
