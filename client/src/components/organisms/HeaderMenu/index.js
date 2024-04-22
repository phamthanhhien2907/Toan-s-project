import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { navigation } from "../../../utils/constant";
import path from "../../../utils/path";
import { MdDiscount, MdOutlineApartment } from "react-icons/md";
import { FaBagShopping, FaHeadphonesSimple, FaLaptop } from "react-icons/fa6";
import { GiAutoRepair } from "react-icons/gi";
import { logout } from "../../../stores/actions/authAction";
import { apigetCurrent } from "../../../services/userService";
import cart from "../../../assets/images/cart.png";
import { getCurrent } from "../../../stores/actions/userAction";

const HeaderMenu = () => {
  const { isLoggedIn, token, current } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isHovering, setIsHovering] = useState(false);
  // const { currentData } = useSelector((state) => state.user);
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     let response = await apigetCurrent(token);
  //     console.log(response);
  //     if (response?.err === 0) {
  //       setUserData(response?.response);
  //     } else {
  //       setUserData({});
  //     }
  //   };
  //   fetchUser();
  // }, [isLoggedIn]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     isLoggedIn && dispatch(getCurrent());
  //   }, 100);
  // }, [isLoggedIn]);

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  return (
    <>
      {isLoggedIn ? (
        <div className="flex items-start flex-3 py-2   ">
          {navigation.map((el) => {
            if (el.children) {
              return (
                <div className="relative " key={el.id}>
                  <NavLink
                    to={!isLoggedIn && `/${path.LOGIN}`}
                    className={({ isActive }) =>
                      isActive
                        ? `${el.css}text-blue-500  `
                        : `hover:bg-gray-200 text-gray-500 ${el.css}`
                    }
                    onClick={() => setShowDropdown(!showDropdown)}
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                  >
                    {/* <img
                      src={el.image}
                      className="w-[24px] h-[24px] fill-blue-500"
                      alt={el.name}
                    /> */}
                    <div className="flex w-[300px] gap-4">
                      <div className="text-white cursor-pointer  text-sm flex items-center justify-center gap-4">
                        <FaHeadphonesSimple />
                        <div className="flex flex-col">
                          <span>Hotline</span>
                          <span>1800.6975</span>
                        </div>
                      </div>
                      <div className="text-white cursor-pointer text-sm flex items-center justify-center gap-4">
                        <MdOutlineApartment />
                        <span>Hệ thống Showroom</span>
                      </div>
                      {/* <div className="w-full h-[55px] flex  gap-4 items-center justify-center"></div> */}
                      <div className="flex items-center justify-center gap-4 text-white">
                        {el.image}
                        <div className="flex flex-col w-[120px] ">
                          <span className="text-sm font-medium">Xin chào,</span>
                          <span className="text-sm font-medium">
                            Lê Quang Toàn
                          </span>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
              );
            } else {
              return (
                <NavLink
                  to={
                    el.id === 1
                      ? `/${path.HOME}`
                      : isLoggedIn
                      ? el.path
                      : `/${path.LOGIN}`
                  }
                  key={el.id}
                  className={({ isActive }) =>
                    isActive
                      ? `${el.css}text-blue-500  `
                      : ` text-gray-500 ${el.css}`
                  }
                >
                  <div className="flex gap-2 items-center justify-center">
                    {el.image}

                    <div className="flex flex-col">
                      <span className="text-sm font-medium">Đăng nhập</span>
                      <span className="text-sm font-medium">Đăng ký</span>
                    </div>
                  </div>
                </NavLink>
              );
            }
          })}
          <span className="after:pr-[1px] after:bg-gray-300 after:mr-[20px] after:align-center after:mt-2 mt-2 ml-[160px]  "></span>
          <Link
            className="flex mr-[30px]"
            to={isLoggedIn ? `/${path.CHECKOUT}${path.CART}` : `/${path.LOGIN}`}
          >
            <div className="flex  ">
              <img
                src={cart}
                alt=""
                className="hover:rounded-md flex my-1 text-white
      w-[30px] h-[30px]  "
              />
              <span className="border text-white text-xs font-semibold w-[25px] h-[15px] justify-center flex items-center bg-red-500 rounded-[50%] border-red-500">
                {isLoggedIn ? 0 : 0}
              </span>
            </div>
          </Link>
        </div>
      ) : (
        <div className="flex items-start flex-3 py-2   ">
          {navigation.map((el) => {
            if (el.children) {
              return (
                <div className="relative " key={el.id}>
                  <NavLink
                    to={!isLoggedIn && `/${path.LOGIN}`}
                    className={({ isActive }) =>
                      isActive
                        ? `${el.css}text-blue-500  `
                        : ` text-gray-500 ${el.css}`
                    }
                    onClick={() => setShowDropdown(!showDropdown)}
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                  >
                    {/* <img
                  src={el.image}
                  className="w-[24px] h-[24px] fill-blue-500"
                  alt={el.name}
                /> */}
                    <div className="flex w-[300px] gap-4">
                      <div className="text-white cursor-pointer  text-sm flex items-center justify-center gap-4">
                        <FaHeadphonesSimple />
                        <div className="flex flex-col">
                          <span>Hotline</span>
                          <span>1800.6975</span>
                        </div>
                      </div>
                      <div className="text-white cursor-pointer text-sm flex items-center justify-center gap-4">
                        <MdOutlineApartment />
                        <span>Hệ thống Showroom</span>
                      </div>
                      {/* <div className="w-full h-[55px] flex  gap-4 items-center justify-center"></div> */}
                      <div className="flex items-center justify-center gap-4 ">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-white">
                            Đăng nhập
                          </span>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
              );
            } else {
              return (
                <NavLink
                  to={
                    el.id === 1
                      ? `/${path.HOME}`
                      : isLoggedIn
                      ? el.path
                      : `/${path.LOGIN}`
                  }
                  key={el.id}
                  className={({ isActive }) =>
                    isActive
                      ? `${el.css}text-blue-500 hover:bg-blue-300 `
                      : `hover:bg-gray-200 text-gray-500 ${el.css}`
                  }
                >
                  <div className="flex gap-2 items-center justify-center">
                    {el.image}

                    <div className="flex flex-col">
                      <span className="text-sm font-medium">Đăng nhập</span>
                      <span className="text-sm font-medium">Đăng ký</span>
                    </div>
                  </div>
                </NavLink>
              );
            }
          })}
          <span className="after:pr-[1px] after:bg-gray-300 after:mr-[20px] after:align-center after:mt-2 mt-2 ml-[120px] "></span>
          <Link
            className="flex mr-[30px]"
            to={isLoggedIn ? `/${path.CHECKOUT}${path.CART}` : `/${path.LOGIN}`}
          >
            <div className="flex  ">
              <img
                src={cart}
                alt=""
                className="hover:rounded-md flex my-1 
  w-[30px] h-[30px]  "
              />
              <span className="border text-white text-xs font-semibold w-[25px] h-[15px] justify-center flex items-center bg-red-500 rounded-[50%] border-red-500">
                {isLoggedIn ? 0 : 0}
              </span>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default HeaderMenu;
