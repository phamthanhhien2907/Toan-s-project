import React, { memo, useEffect, useState } from "react";
// import banner from "../../../assets/images/banner.webp";
import { Link } from "react-router-dom";
import path from "../../../utils/path";
import { apiGetBanner } from "../../../services/productService";
import Slider from "react-slick";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Banner = ({ banner }) => {
  console.log(banner);
  // const [banner, setBanner] = useState("");
  // const [loading, setLoading] = useState(true);
  // const getApiBanner = async () => {
  //   const response = await apiGetBanner();
  //   if (response.status === "Success") {
  //     setBanner(response.data);
  //     setLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   getApiBanner();
  // }, []);

  console.log(banner);
  return (
    <>
      {banner && (
        <Slider className="custom-slider" {...settings}>
          {banner?.map((el) => (
            <div className="flex items-center justify-center">
              <img
                src={el?.url}
                alt=""
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </div>
            // <Product
            //   key={el.id}
            //   // pid={el.id}
            //   productData={el}
            //   isNew={activedTab === 1 ? true : false}
            //   normal={normal}
            //   category={data}
            // />
          ))}
        </Slider>
      )}
    </>
    // <div className="bg-white rounded-md w-full flex items-center justify-center ">
    //   <div className="pl-4">
    //     <img
    //       src={banner[8]?.url}
    //       alt=""
    //       className="w-[406px] h-[306px] rounded-xl"
    //     />
    //   </div>

    //   <div className="flex flex-col gap-4 p-4">
    //     <div className="flex gap-3">
    //       {fourBanners?.map((el) => (
    //         <Link to={path.LOGIN} key={el?.id}>
    //           <img
    //             src={el?.url}
    //             alt=""
    //             className="w-[146px] h-[146px] rounded-xl"
    //           />
    //         </Link>
    //       ))}
    //     </div>
    //     <div className="flex gap-3">
    //       {fourBannersEnd?.map((el) => (
    //         <Link to={path.LOGIN} key={el?.id}>
    //           <img
    //             src={el?.url}
    //             alt=""
    //             className="w-[146px] h-[146px] rounded-xl"
    //           />
    //         </Link>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default memo(Banner);
