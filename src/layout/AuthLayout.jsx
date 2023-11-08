import React from "react";
import { useLocation } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import VerifyAccount from "../pages/VerifyAccount";

const AuthLayout = () => {
  const location = useLocation();
  return (
    <div className="flex h-full ">
      <div className="flex-1">
        <div className="flex justify-center items-center h-[80%]">
          {(location.pathname === "/" ? <Login /> : location.pathname === "/signup" ?  <Signup /> : <VerifyAccount />)}
        </div>
      </div>
      <div className="hidden flex-1 sm:block">
        <img
          src="https://img.freepik.com/free-vector/book-store_53876-16926.jpg?w=1060&t=st=1697101551~exp=1697102151~hmac=004e6b43c4049a66d31482a97db84cf35b35733b01e9c254526c55aedb0802a3"
          alt="side"
          className="h-full"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
