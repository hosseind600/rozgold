import React from "react";

export default function Qest() {
  return (
    <div className="bg-[#eee] rounded-xl p-10 relative my-30">
      <h2 className="font-bold text-lg z-20 relative">
        خرید طلای قسطی <span className="text-amber-500"> بدون پیش پرداخت</span>
      </h2>
      <p className="ml-0 lg:ml-50 mt-5 text-gray-800">شما میتوانید طلای مورد نظرتان را بصورت اقساطی خرید نمایید و در بازه های ماهانه اقدام به پرداخت کنید . برای راهنمایی بیشتر با بخش پشتیبانی تماس بگیرید</p>
      
      <img src="/aqsat.png" className="h-[150px] lg:h-[200%] absolute left-[0] lg:left-[20px] top-[20px] lg:top-[40%] -translate-y-[50%]" alt="" />
    </div>
  );
}
