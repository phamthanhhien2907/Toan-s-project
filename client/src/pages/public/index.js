import React, { useCallback, useEffect } from "react";
import { Link, Outlet, Route, useLocation } from "react-router-dom";

import { Footer, Header } from "../../components/organisms";

import path from "../../utils/path";
import HeaderMenu from "../../components/organisms/HeaderMenu";
const Public = () => {
  const location = useLocation();
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full ">
        <img
          className="w-full"
          src="https://file.hstatic.net/200000722513/file/loa_xin_topbar_2c9a1595b2e64fc48d34b547c39078f0.png"
          alt=""
        />
      </div>

      {location.pathname === `/${path.CHECKOUT}${path.PAYMENT}` ? (
        ""
      ) : (
        <div className="flex w-full bg-opacity-90  bg-red-600">
          <Header />
          <HeaderMenu />
        </div>
      )}

      <div className="w-full flex items-center flex-col h-full">
        <Outlet />
        <div className="">
          {location.pathname.slice(1) === path.HOME ||
          location.pathname === `/${path.CHECKOUT}${path.PAYMENT}` ? (
            ""
          ) : (
            <Footer />
          )}
        </div>
      </div>
    </div>
  );
};

export default Public;
