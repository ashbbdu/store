import React from 'react'

import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const VerifyAccount = () => {
  return (
    <div className="w-[60%]">
    <div className="flex justify-center">
    <img src={logo} alt='logo' width={130}  />
    </div>
    <h2 className="text-2xl my-8 font-semibold">
      Login to explore and buy books
    </h2>
    <form>
      {/* <div className="my-4">
        <label htmlFor="email">Email</label> <br />
        <input
          placeholder="Enter Email"
          name="email"
          type="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="my-2">
        <label htmlFor="password">Password</label>
        <br />
        <input
        placeholder="Enter Password"
          name="password"
          type="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="text-right text-blue-500 hover:underline my-2">
        <Link to="/reset-password">Reset Password</Link>
      </div> */}
      <button className="w-full px-4 py-2 bg-[#84d2e6] rounded-md my-4">
        Login
      </button>
    </form>
  </div>
  )
}

export default VerifyAccount