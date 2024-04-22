import React, { useEffect, useState } from "react";
import icons from "../../../utils/icons";
import { Input } from "../../atoms";
import { color, price } from "../../../utils/constant";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useSelector } from "react-redux";
const { FaMapMarkerAlt, CiStar } = icons;

const SliderCate = ({ products }) => {
  const [prices, setPrices] = useState({
    from: "0",
    to: "0",
  });

  const navigate = useNavigate();
  const { category } = useParams();
  const [selected, setSelected] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);

  const handleSelect = (e) => {
    const alreadyColor = selected.find((el) => el === e.target.value);
    if (alreadyColor)
      setSelected((prev) => prev.filter((el) => el !== e.target.value));
    else setSelected((prev) => [...prev, e.target.value]);
  };

  // const handleSelectBrand = (e) => {
  //   const alreadyBrand = selectedBrand.find((el) => el === e.target.value);
  //   if (alreadyBrand)
  //     setSelectedBrand((prev) => prev.filter((el) => el !== e.target.value));
  //   else setSelectedBrand((prev) => [...prev, e.target.value]);
  // };

  // // const { categories } = useSelector((state) => state.product)
  // // console.log(categories);
  // const data = [];
  // const { newData } = useSelector((state) => state.product);
  // newData?.map((datas) => {
  //   if (datas?.type === category) data.push(datas);
  // });
  // console.log(data);
  // const brand = [];
  // const brandSort = [];
  // data?.map((el) => {
  //   if (el?.brand) {
  //     brand.push(el?.brand);
  //   }
  // });
  // const countMap = brand.reduce((acc, name) => {
  //   acc[name] = (acc[name] || 0) + 1;
  //   return acc;
  // }, {});

  // for (const key in countMap) {
  //   brandSort.push(key);
  // }

  // // console.log(selected);
  // // const handleValueChange = (e) => {
  // //   console.log(e);
  // // };
  // useEffect(() => {
  //   if (selected.length > 0) {
  //     navigate({
  //       pathname: `/${category}`,
  //       search: createSearchParams({
  //         color: selected.join(","),
  //       }).toString(),
  //     });
  //   } else if (selectedBrand.length > 0) {
  //     navigate({
  //       pathname: `/${category}`,
  //       search: createSearchParams({
  //         brand: selectedBrand.join(","),
  //       }).toString(),
  //     });
  //   } else {
  //     navigate(`/${category}`);
  //   }
  // }, [selected, selectedBrand]);

  return (
    <div className="p-4 flex flex-col gap-4">
      {/* <div className="flex flex-col gap-1">
        <h3 className="text-sm font-medium">Danh Mục Sản Phẩm</h3>
        {data.map((el, index) => (
          <div key={index}>
            <span className="font-normal text-xs">{el}</span>
          </div>
        ))}
      </div> */}
      <div className="flex flex-col ">
        <h3 className=" flex items-center gap-2 font-normal text-sm text-gray-400"></h3>
      </div>

      <div className="flex flex-col gap-2">
        {/* <h3 className="text-sm font-medium">Khoảng giá</h3>
        <div className="flex flex-col gap-2"> */}
        {/* {price?.map((el, index) => (
            <span
              key={index}
              className="cursor-pointer rounded-2xl bg-gray-200  p-1 px-2 w-fit   text-sm"
            >
              {el}
            </span>
          ))} */}
        {/* 
          <span className="text-xs text-gray-400">Chọn khoảng giá</span>
          <div className="flex gap-1">
            <input
              value={prices.from}
              onChange={(e) =>
                setPrices((prev) => ({ ...prev, from: e.target.value }))
              }
              id="from"
              type="number"
              className="border-black border rounded-md w-[77px] h-[30px] placeholder:text-black  px-2 outline-none "
            />
            <span>-</span>
            <input
              value={prices.to}
              onChange={(e) =>
                setPrices((prev) => ({ ...prev, to: e.target.value }))
              }
              type="number"
              id="to"
              className="border-black border rounded-md w-[77px] h-[30px] px-2 placeholder:text-black outline-none "
            />
          </div>
          <input
            className="bg-blue-100 border rounded-md h-1"
            type="range"
            id="vol"
            name="vol"
            min="0"
            max="100"
          />
        </div> */}
      </div>
      {/* <div className="flex flex-col gap-2">
        <h3>Màu sắc</h3>
        {color?.map((el, index) => (
          <div key={index} className="flex gap-2">
            <input
              id={el}
              name={el}
              value={el}
              className="w-[16px]"
              type="checkbox"
              onChange={handleSelect}
              checked={selected.some((selectedItem) => selectedItem === el)}
            />
            <span className="text-sm">{el}</span>
          </div>
        ))}
      </div> */}
      <div className="flex flex-col gap-2">
        {/* {brandSort?.map((el, index) => (
          <div key={index} className="flex gap-2">
            <input
              id={el}
              name={el}
              value={el}
              className="w-[16px]"
              type="checkbox"
              onChange={handleSelectBrand}
              checked={selectedBrand.some(
                (selectedItem) => selectedItem === el
              )}
            />
            <span className="text-sm">{el}</span>
          </div>
        ))} */}
      </div>
      {/* <div className="flex flex-col gap-2">
        <h3>Thương hiệu</h3>
        <div className="flex gap-2">
          <input className="w-[16px]" type="checkbox" />
          <span className="text-sm">finish</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3>Độ tuổi</h3>
        <div className="flex gap-2">
          <input className="w-[16px]" type="checkbox" />
          <span className="text-sm">2 - 4 tuổi</span>
        </div>
      </div> */}
    </div>
  );
};

export default SliderCate;
