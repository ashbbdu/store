import { useFormik } from "formik";
import React from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { loginIntialValues } from "../utils/initialValues";
import { validationSchema } from "../validationSchema";


const Login = () => {
    const navigate = useNavigate();
  const formik = useFormik({
    initialValues: loginIntialValues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values, "value");
    },
  });


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login | Book Store</title>
      </Helmet>
      <div className="w-[60%]">
        <div className="flex justify-center">
          <img src={logo} alt="logo" width={130} />
        </div>
        <h2 className="text-2xl my-8 font-semibold">
          Login to explore and buy books
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="my-4">
            <label htmlFor="email">Email</label> <br />
            <input
              placeholder="Enter Email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <div className="text-red-500 text-xs">
              {formik.errors.email &&
                formik.touched.email &&
                formik.errors.email}
            </div>
          </div>
          <div className="my-2">
            <label htmlFor="password">Password</label>
            <br />
            <input
              placeholder="Enter Password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
           <div className="text-red-500 text-xs">
              {" "}
              {formik.errors.password &&
                formik.touched.password &&
                formik.errors.password}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className=" text-blue-500 hover:underline my-2">
              <Link to="/signup">Register</Link>
            </div>
            <div className=" text-blue-500 hover:underline my-2">
              <Link to="/reset-password">Reset Password</Link>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#84d2e6] rounded-md my-4"
            onClick={() =>  navigate("/dashboard")}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
