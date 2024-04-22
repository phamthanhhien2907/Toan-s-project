import React, { useEffect, useState } from "react";
import "react-phone-input-2/lib/style.css";
import { Link, useNavigate } from "react-router-dom";
import path from "../../../utils/path";
import { auth } from "../../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { logo, banner_auth, facebook, google } from "../../atoms/images";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import { Button, Input } from "../../atoms/index";
import OtpInput, { ResendOTP } from "otp-input-react";
import icons from "../../../utils/icons";
import { useDispatch, useSelector } from "react-redux";
// import { apiLoginSuccess, apiRegister } from "../../../services/authService";
import { loginSuccessAction } from "../../../stores/actions/authAction";
import { apiRegister } from "../../../services/authService";
// import { apiRegister } from "../../services/authService";
const { MdOutlineArrowBackIos, BsFillShieldLockFill, CgSpinner } = icons;
const Login = ({ login, isAuthenticated }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [payload, setPayload] = useState({
  //   email: "",
  //   password: "",
  // });
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [valuePayload, setValuePayload] = useState("");
  const [payload, setPayload] = useState({
    email: "",
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
    address: "",
  });
  const { email, password, first_name, last_name, phone, address, username } =
    payload;

  const onChange = (e) =>
    setPayload({ ...payload, [e.target.name]: e.target.value });
  const { isLoggedIn, typeLogin } = useSelector((state) => state.auth);

  // }, [isLoggedIn]);
  useEffect(() => {
    setTimeout(() => {
      if (isLoggedIn && typeLogin === "Success") {
        // setPayload({});
        navigate("/", { state: { value: "abc" } });
      }
    }, 200);
  }, [isLoggedIn, typeLogin]);
  const onRegister = async () => {
    const response = await apiRegister(payload);
    if (response.status === 201 || response?.status === 200) {
      // setPayload({
      //   username: "",
      //   password: "",
      //   address: "",
      //   email: "",
      //   first_name: "",
      //   last_name: "",
      //   phone: "",
      // });
      setTimeout(() => {
        setIsRegister(false);
      }, 200);
      // navigate({ pathname: `/${path.LOGIN}` });
    }
  };
  const onSubmit = async () => {
    // const response = await apiLoginSuccess(payload);
    // console.log(response);
    try {
      dispatch(loginSuccessAction(payload));
      if (!isLoggedIn) {
        console.log("Sai mat khau");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [otp, setOtp] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  // const countryCode = "+84";
  // const [phone, setPhone] = useState(countryCode);
  useEffect(() => {
    const fetchUser = async () => {
      // if (response?.err === 0) {
      //   setPhone(response?.response);
      // } else {
      //   setUserData({});
      // }
    };
  }, []);

  const [showOTP, setShowOTP] = useState(false);
  const [isUser, setIsUser] = useState(null);

  const handleRecaptchaVerify = () => {
    if (!window.recaptchaVerify) {
      window.recaptchaVerify = new RecaptchaVerifier(
        auth,
        "recaptcha-verifier",
        {
          size: "invisible",
          callback: (response) => {
            // console.log({ callback: response });
            // onOTPVerify();
          },
          "expired-callback ": (response) => {
            console.log({ expired: response });
          },
        }
      );
    }
  };
  const onSignup = () => {
    setLoading(true);
    handleRecaptchaVerify();
    const verifier = window.recaptchaVerify;
    signInWithPhoneNumber(auth, phone, verifier)
      .then((result) => {
        // console.log(result);
        setLoading(false);
        toast.success("Sent OTP to your phone");
        window.confirmOTP = result;
        setShowOTP(true);
      })
      .catch((error) => {
        setLoading(false);
        window.isSentOTP = true;

        toast.success("Some went wrong..");
      });
  };

  const onOTPVerify = () => {
    setLoading(true);
    window.confirmOTP
      .onConfirmation(otp)
      .then((result) => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);

        console.log(error);
      });
    // window.confirmationResult
    //   .confirm(otp)
    //   .then(async (res) => {
    //     console.log(res);
    //     setIsUser(res.user);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setLoading(false);
    //   });
  };
  // const handleRecaptchaVerify = () => {
  //   if (!window.recaptchaVerify) {
  //     window.recaptchaVerify = new RecaptchaVerifier(
  //       auth,
  //       "recaptcha-verifier",
  //       {
  //         size: "invisible",
  //         callback: (response) => {
  //           console.log({ callback: response });
  //           onOTPVerify();
  //         },
  //         "expired-callback ": (response) => {
  //           console.log({ expired: response });
  //         },
  //       }
  //     );
  //   }
  // };

  const handleLogin = (type) => {
    window.open(`http://localhost:5000/api/auth/${type}`, "_self");
  };
  return (
    <div className="flex w-full bg-white items-center justify-center ">
      {isRegister ? (
        <div className="flex flex-col ml-12 gap-2 w-[410px]">
          <span className="ml-4 ">
            <MdOutlineArrowBackIos
              size={21}
              className="text-gray-400 cursor-pointer"
              onClick={() => setIsRegister(false)}
            />
          </span>
          <div className="flex flex-col ml-4 gap-2">
            <h1 className="text-2xl font-medium">Tạo tài khoản</h1>
            <span>Vui lòng nhập số điện thoại</span>
          </div>
          <input
            type="username"
            placeholder="username"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
            required
            className={
              "px-4 py-2 rounded-md border w-[410px]  ml-4 placeholder:text-sm  outline-none"
            }
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
            className={
              "px-4 py-2 rounded-md border w-[410px]  ml-4 placeholder:text-sm  outline-none"
            }
          />
          <div className="pt-4">
            <Button
              name={"Đăng nhập"}
              handleOnclick={isRegister ? onRegister : onSubmit}
            />
          </div>

          {/* <span className="relative flex items-center justify-center px-4 pt-16 ml-4 w-[410px]">
            <span className=" relative text-gray-500 text-lg px-4 bg-white z-20">
              Hoặc tiếp tục bằng
            </span>
            <span className="absolute h-[1px]  w-full bg-gray-300 bottom-0 mt-8  left-0 top-[50%] "></span>
          </span> */}
          {/* <div className="w-full flex items-center justify-center">
            <div className="w-[58px] h-[58px] flex gap-4 mr-12">
              <img
                className="cursor-pointer"
                onClick={() => handleLogin("facebook")}
                src={facebook}
                alt=""
              />
              <img
                className="cursor-pointer"
                src={google}
                alt=""
                onClick={() => handleLogin("google")}
              />
            </div>
          </div> */}
          <span className="text-xs ml-4">
            Bằng việc tiếp tục, bạn đã đọc và đồng ý với
            <span className="underline"> điều khoản sử dụng</span> và
            <span className="underline">
              Chính sách bảo mật thông tin cá nhân
            </span>
            của Phong Vũ
          </span>
        </div>
      ) : (
        <div className="flex flex-col ml-4 mt-[30px] gap-4 ">
          {/* <span className="ml-4 ">
            <MdOutlineArrowBackIos
              size={21}
              className="text-gray-400 cursor-pointer"
              onClick={() => setIsEmail(false)}
            />
          </span> */}
          <div className="flex flex-col ml-4 gap-2">
            <h1 className="text-2xl font-medium">Đăng nhập bằng email</h1>
            <span>Nhập email và mật khẩu tài khoản Phong Vũ</span>
          </div>

          <input
            type="username"
            placeholder="username"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
            required
            className={
              "px-4 py-2 rounded-md border w-[410px]  ml-4 placeholder:text-sm  outline-none"
            }
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
            className={
              "px-4 py-2 rounded-md border w-[410px]  ml-4 placeholder:text-sm  outline-none"
            }
          />
          <div className="pt-4">
            <Button name={"Đăng nhập"} handleOnclick={onSubmit} />
          </div>
          <div className="flex flex-col text-sm ml-4 font-normal pt-4 text-blue-500">
            <span
              className="cursor-pointer"
              onClick={() => setIsForgotPassword(true)}
            >
              Quên mật khẩu?
            </span>
            <div className="flex">
              <span className="text-gray-500">Chưa có tài khoản?</span>
              <span
                className="cursor-pointer"
                onClick={() => setIsRegister(true)}
              >
                Tạo tài khoản
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
