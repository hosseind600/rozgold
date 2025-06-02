"use client";
import React, { useState } from "react";

export default function SubHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-10 flex items-center justify-center bg-[#d9af73] h-[40px] text-sm gap-2"
      >
        <svg
          width="16px"
          height="16px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 5L10 5M21 19L10 19M21 12L10 12M6 5C6 5.82843 5.32843 6.5 4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5ZM6 19C6 19.8284 5.32843 20.5 4.5 20.5C3.67157 20.5 3 19.8284 3 19C3 18.1716 3.67157 17.5 4.5 17.5C5.32843 17.5 6 18.1716 6 19ZM6 12C6 12.8284 5.32843 13.5 4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12Z"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-white">دسته بندی ها</span>
      </button>
      <div className="flex-1 bg-[#f3e6d5] h-[40px]"></div>
      {open && <div className="absolute  w-full top-[40px] bg-[#d9af73] p-3 md:p-5 lg:p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 z-20 text-white">
        <div className=" ">
          <div className="font-bold">گردنبند</div>
          <ul className="px-5 ">
            <li>
              <a
                className="text-white/60 hover:text-white transition-all"
                href="#"
              >
                گردنبند زنانه
              </a>
            </li>
            <li>
              <a
                className="text-white/60 hover:text-white transition-all"
                href="#"
              >
                گردنبند مردانه
              </a>
            </li>
            <li>
              <a
                className="text-white/60 hover:text-white transition-all"
                href="#"
              >
                گردنبند کودکانه
              </a>
            </li>
            <li>
              <a
                className="text-white/60 hover:text-white transition-all"
                href="#"
              >
                گردنبند های محبوب
              </a>
            </li>
          </ul>
        </div>
        <div className=" ">
          <div className="font-bold">انگشتر</div>
          <ul className="px-5 ">
            <li>
              <a
                className="text-white/60 hover:text-white transition-all"
                href="#"
              >
                انگشتر زنانه
              </a>
            </li>
            <li>
              <a
                className="text-white/60 hover:text-white transition-all"
                href="#"
              >
                انگشتر مردانه
              </a>
            </li>
            <li>
              <a
                className="text-white/60 hover:text-white transition-all"
                href="#"
              >
                انگشتر کودکانه
              </a>
            </li>
            <li>
              <a
                className="text-white/60 hover:text-white transition-all"
                href="#"
              >
                انگشتر های محبوب
              </a>
            </li>
          </ul>
        </div>
        <div className=" ">
          <div className="font-bold">سرویس طلا</div>
          <ul className="px-5 ">
            <li>
              <a
                className="text-white/60 hover:text-white transition-all"
                href="#"
              >
                سرویس طلا زنانه
              </a>
            </li>
            <li>
              <a
                className="text-white/60 hover:text-white transition-all"
                href="#"
              >
                سرویس طلا مردانه
              </a>
            </li>
            <li>
              <a
                className="text-white/60 hover:text-white transition-all"
                href="#"
              >
                سرویس طلا کودکانه
              </a>
            </li>
            <li>
              <a
                className="text-white/60 hover:text-white transition-all"
                href="#"
              >
                سرویس طلا های محبوب
              </a>
            </li>
          </ul>
        </div>
        <div className=" ">
          <div className="font-bold"> گوشواره</div>
          <ul className="px-5 ">
            <li>
              <a
                className="text-white/60 hover:text-white transition-all"
                href="#"
              >

                گوشواره زنانه
              </a>
            </li>
            <li>
              <a
                className="text-white/60 hover:text-white transition-all"
                href="#"
              >

                گوشواره مردانه
              </a>
            </li>
            <li>
              <a
                className="text-white/60 hover:text-white transition-all"
                href="#"
              >

                گوشواره کودکانه
              </a>
            </li>
            <li>
              <a
                className="text-white/60 hover:text-white transition-all"
                href="#"
              >

                گوشواره های محبوب
              </a>
            </li>
          </ul>
        </div>
        <div className=" ">
          <div className="font-bold"> دستبند</div>
          <ul className="px-5 ">
            <li>
              <a
                className="text-white/60 hover:text-white transition-all"
                href="#"
              >

                دستبند زنانه
              </a>
            </li>
            <li>
              <a
                className="text-white/60 hover:text-white transition-all"
                href="#"
              >

                دستبند مردانه
              </a>
            </li>
            <li>
              <a
                className="text-white/60 hover:text-white transition-all"
                href="#"
              >

                دستبند کودکانه
              </a>
            </li>
            <li>
              <a
                className="text-white/60 hover:text-white transition-all"
                href="#"
              >

                دستبند های محبوب
              </a>
            </li>
          </ul>
        </div>
      </div>}
    </div>
  );
}
