import React from "react";

export default function Footer() {
  return (
    <div className="bg-black p-3 md:pt-40 pt-60 lg:pt-30 flex flex-col md:flex-row gap-5 items-start justify-between text-white relative">
        <div className="absolute lg:top-0 px-10 left-[2.5%] top-[10px] lg:-translate-y-[50%] bg-[#f7f7f7] border-4 border-r-amber-600 border-t-0 border-l-0 border-b-gray-600 text-black rounded-xl shadow-xl min-h-[85px] w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between">
            <div className="flex items-center">
                <img src="/fastship.png" alt="" />
                <span>ارسال سریع به همه نقاط ایران</span>
            </div>
            <div className="flex items-center">
                <img src="/supp.png" alt="" />
                <span>پشتیبانی آنلاین هر روز هفته</span>
            </div>
            <div className="flex items-center">
                <img src="/pay.png" alt="" />
                <span>امکان پرداخت در محل</span>
            </div>
            <div className="flex items-center">
                <img src="/pay2.png" alt="" />
                <span>تضمین برگشت وجه</span>
            </div>
        </div>
      <div className="flex-1">
        <h1 className="font-bold text-xl">
          گالری <span>رزگلد</span>
        </h1>
        <p className="text-gray-400 text-sm mt-5">
          یک متن توضیحات راجع به برند رزگلد که در پایین سایت قرار میگیند رزگلد که در پایین سایت قرار میگیرد و خلاصه
          ای از نحوه فعالیت سایت را به نمایش میگذارد
        </p>
      </div>
      <div className="flex-1 flex">
        <div className="flex-1">
          <div className="font-bold mb-5">دسترسی سریع</div>
          <ul className=" text-gray-400">
            <li>
              <a href="/">خانه</a>
            </li>
            <li>
              <a href="/">فروشگاه</a>
            </li>
            <li>
              <a href="/">درباره ما</a>
            </li>
            <li>
              <a href="/">تماس با ما</a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="font-bold mb-5">شبکه های مجازی </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                <div className="bg-[#333] p-1 rounded-lg w-[35px] h-[35px]"> </div>
                <div className="bg-[#333] p-1 rounded-lg w-[35px] h-[35px]"> </div>
                <div className="bg-[#333] p-1 rounded-lg w-[35px] h-[35px]"> </div>
                <div className="bg-[#333] p-1 rounded-lg w-[35px] h-[35px]"> </div>
          </div>
          
        </div>
      </div>
      <div className="flex-1">
        <h1 className="font-bold text-xl">
            آدرس و تلفن
        </h1>
        <p className="text-gray-400 text-sm mt-5">
            آدرس : تهران - میدان آزادی - شماره 10 <br/>
            تلفن : 02121212325
        </p>
         <button className="h-[40px] my-5 px-10 flex items-center justify-center text-[#d9af73] transition-all text-sm rounded-lg bg-[#464646] hover:bg-[#d9af73] hover:text-[#f8e3b4]">
           نمایش روی نقشه
            </button>
         <button className="h-[40px]  px-10 flex items-center justify-center text-[#d9af73] transition-all text-sm rounded-lg bg-[#464646] hover:bg-[#d9af73] hover:text-[#f8e3b4]">
    پشتیبانی آنلاین
            </button>
      </div>
    </div>
  );
}
