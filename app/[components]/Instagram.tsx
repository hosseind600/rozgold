import React from "react";

export default function Instagram() {
  return (
    <div className="my-15">
      <div className="  flex justify-between mb-5">
        <div className="flex flex-col">
          <span className="text-gray-600 text-lg font-bold">ما را در <span className="text-[#d9af73]">اینستا گرام</span> دنبال کنید</span>
        </div>
        <div className="flex gap-4 items-end">
           <button className="h-[40px] px-3 md:px-10 flex items-center justify-center text-[#d9af73] transition-all text-sm rounded-lg bg-[#f4e7d4] hover:bg-[#d9af73] hover:text-[#f8e3b4]">
              <span className="hidden lg:block">  رفتن به پیج ایسنتاگرام</span>
              <span className="block lg:hidden">پیج ایسنتاگرام</span>
            </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
   
        <div className="rounded-xl bg-white shadow-lg flex flex-col p-2">
          <img className="rounded-xl" src="/samples/i1.png" alt="" />
        
        </div>
   
        <div className="rounded-xl bg-white shadow-lg flex flex-col p-2">
          <img className="rounded-xl" src="/samples/i2.png" alt="" />
        
        </div>
        <div className="rounded-xl bg-white shadow-lg flex flex-col p-2">
          <img className="rounded-xl" src="/samples/i3.png" alt="" />
        
        </div>
        <div className="rounded-xl bg-white shadow-lg flex flex-col p-2">
          <img className="rounded-xl" src="/samples/i4.png" alt="" />
     
        </div>


      </div>
    </div>
  );
}
