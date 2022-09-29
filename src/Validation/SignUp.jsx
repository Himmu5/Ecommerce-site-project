import { useFormik } from "formik";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup'

 function SignUp() {
    function submit(){
        console.log('Data is :' , formik.values.FULLNAME , formik.values.EMAIL, formik.values.USERNAME, formik.values.PASSWORD , formik.values.CONFIRM);
    }

    const schema =Yup.object().shape({
        FULLNAME:Yup.string().required(),
        EMAIL:Yup.string().required(),
        USERNAME:Yup.string().required(),
        PASSWORD:Yup.string().min(6).required(),
        CONFIRM:Yup.string().min(6).required() 
    });


  const formik = useFormik({
    initialValues:{
        FULLNAME:"",
        EMAIL:"",
        USERNAME:"",
        PASSWORD:"",
        CONFIRM:""
    },
    onSubmit:submit,
    validationSchema:schema,
    
  });

  return (
    <div className="">
      <div className= "mx-3 my-10 max-w-5xl sm:mx-10 md:mx-auto space-y-5 p-4 sm:p-20 bg-white">
        <h1 className="text-2xl">Sign Up</h1>
        <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-3 text-sm border p-6">
          <input
            type="text"
            name="FULLNAME"
            value={formik.values.FULLNAME}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="FULL NAME"
            className="px-4 py-2 border"
          />
          { formik.touched.FULLNAME && formik.errors.FULLNAME&&<div className="text-red-500">{formik.errors.FULLNAME}</div>}
          <input
            type="email"
            name="EMAIL"
            value={formik.values.EMAIL}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="ENTER THE EMAIL"
            className="px-4 py-2 border"
          />
          {formik.touched.EMAIL && formik.errors.EMAIL&&<div className="text-red-500">{formik.errors.EMAIL}</div>}
          <input
            type="text"
            name="USERNAME"
            value={formik.values.USERNAME}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="USERNAME"
            className="px-4 py-2 border"
          />
          {formik.touched.USERNAME&&formik.errors.USERNAME&&<div className="text-red-500">{formik.errors.USERNAME}</div>}

          <input
            type="password"
            name="PASSWORD"
            value={formik.values.PASSWORD}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="ENTER THE PASSWORD"
            className="px-4 py-2 border"
          />
          {formik.touched.PASSWORD&&formik.errors.PASSWORD&&<div className="text-red-500">{formik.errors.PASSWORD}</div>}

          <input
            type="password"
            name="CONFIRM"
            value={formik.values.CONFIRM}
            onChange={formik.handleChange}
            placeholder="CONFIRM PASSWORD"
            className="px-4 py-2 border"
            onBlur={formik.handleBlur}
          />
          {formik.touched.CONFIRM&&formik.errors.CONFIRM&&<div className="text-red-500">{formik.errors.CONFIRM}</div>}
          
          <button type="submit" className="px-4 py-2 bg-red-500 font-bold text-white text-xl">
            SignUp
          </button>
          <Link to="/component/validation/SignIn" className="text-red-500">Already Have an Account ?</Link>
        </form>
      </div>
    </div>
  );
}
export default memo(SignUp);