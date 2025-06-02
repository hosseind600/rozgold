import React from "react";

export default function Specials() {
  return (
    <div className="mt-10">
      <div className="  flex justify-between mb-5">
        <div className="flex flex-col">
          <span className="text-gray-600 text-sm">پیشنهاد های</span>
          <span className="font-bold text-[#d9af73]">شگـفت انگیــز</span>
        </div>
        <div className="flex gap-4 items-end">
          <div className="text-sm">مشاهده همه</div>
          <div className="gap-1 items-center hidden md:flex">
            <button className="w-[30px] h-[30px] flex items-center justify-center text-[#d9af73] transition-all text-sm rounded-lg bg-[#f4e7d4] hover:bg-[#d9af73] hover:text-[#f8e3b4]">
              {"<"}
            </button>
            <button className="w-[30px] h-[30px] flex items-center justify-center text-[#d9af73] transition-all text-sm rounded-lg bg-[#f4e7d4] hover:bg-[#d9af73] hover:text-[#f8e3b4]">
              {">"}
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
        <div className="rounded-xl gap-2 bg-[#d9af73] text-white shadow-lg flex items-start justify-end p-2 flex-col py-10">
          <div className="font-bold text-sm relative">
            فروش ویژه
            <img
              src="/explode.png"
              className="absolute -left-[40px] -top-[20px]"
              alt=""
            />
          </div>
          <div className="text-sm">
            شما مشتریان عزیز میتوانید تا پایان هفته محصولات این قسمت را با تخفیف
            ویژه خریداری فرمایید{" "}
          </div>
        </div>
        <div className="rounded-xl bg-white shadow-lg flex flex-col p-2">
          <img src="/samples/1.png" alt="" />
          <div className="">
            <h3>انگشتر طلا مدل 110</h3>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div>2.700.000 تومان</div>
              <div className="w-[40px] h-[40px] flex items-center justify-center text-[#d9af73] transition-all text-sm rounded-lg bg-[#d9af75] hover:bg-[#d9a275] hover:text-[#f8e3b4]">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00014 14H18.1359C19.1487 14 19.6551 14 20.0582 13.8112C20.4134 13.6448 20.7118 13.3777 20.9163 13.0432C21.1485 12.6633 21.2044 12.16 21.3163 11.1534L21.9013 5.88835C21.9355 5.58088 21.9525 5.42715 21.9031 5.30816C21.8597 5.20366 21.7821 5.11697 21.683 5.06228C21.5702 5 21.4155 5 21.1062 5H4.50014M2 2H3.24844C3.51306 2 3.64537 2 3.74889 2.05032C3.84002 2.09463 3.91554 2.16557 3.96544 2.25376C4.02212 2.35394 4.03037 2.48599 4.04688 2.7501L4.95312 17.2499C4.96963 17.514 4.97788 17.6461 5.03456 17.7462C5.08446 17.8344 5.15998 17.9054 5.25111 17.9497C5.35463 18 5.48694 18 5.75156 18H19M7.5 21.5H7.51M16.5 21.5H16.51M8 21.5C8 21.7761 7.77614 22 7.5 22C7.22386 22 7 21.7761 7 21.5C7 21.2239 7.22386 21 7.5 21C7.77614 21 8 21.2239 8 21.5ZM17 21.5C17 21.7761 16.7761 22 16.5 22C16.2239 22 16 21.7761 16 21.5C16 21.2239 16.2239 21 16.5 21C16.7761 21 17 21.2239 17 21.5Z"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white shadow-lg flex flex-col p-2">
          <img src="/samples/2.png" alt="" />
          <div className="">
            <h3>سرویس طلا مدل G35</h3>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div>2.700.000 تومان</div>
              <div className="w-[40px] h-[40px] flex items-center justify-center text-[#d9af73] transition-all text-sm rounded-lg bg-[#d9af75] hover:bg-[#d9a275] hover:text-[#f8e3b4]">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00014 14H18.1359C19.1487 14 19.6551 14 20.0582 13.8112C20.4134 13.6448 20.7118 13.3777 20.9163 13.0432C21.1485 12.6633 21.2044 12.16 21.3163 11.1534L21.9013 5.88835C21.9355 5.58088 21.9525 5.42715 21.9031 5.30816C21.8597 5.20366 21.7821 5.11697 21.683 5.06228C21.5702 5 21.4155 5 21.1062 5H4.50014M2 2H3.24844C3.51306 2 3.64537 2 3.74889 2.05032C3.84002 2.09463 3.91554 2.16557 3.96544 2.25376C4.02212 2.35394 4.03037 2.48599 4.04688 2.7501L4.95312 17.2499C4.96963 17.514 4.97788 17.6461 5.03456 17.7462C5.08446 17.8344 5.15998 17.9054 5.25111 17.9497C5.35463 18 5.48694 18 5.75156 18H19M7.5 21.5H7.51M16.5 21.5H16.51M8 21.5C8 21.7761 7.77614 22 7.5 22C7.22386 22 7 21.7761 7 21.5C7 21.2239 7.22386 21 7.5 21C7.77614 21 8 21.2239 8 21.5ZM17 21.5C17 21.7761 16.7761 22 16.5 22C16.2239 22 16 21.7761 16 21.5C16 21.2239 16.2239 21 16.5 21C16.7761 21 17 21.2239 17 21.5Z"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white shadow-lg flex flex-col p-2">
          <img src="/samples/3.png" alt="" />
          <div className="">
            <h3>پلاک طلا طرح قلب</h3>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div>2.700.000 تومان</div>
              <div className="w-[40px] h-[40px] flex items-center justify-center text-[#d9af73] transition-all text-sm rounded-lg bg-[#d9af75] hover:bg-[#d9a275] hover:text-[#f8e3b4]">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00014 14H18.1359C19.1487 14 19.6551 14 20.0582 13.8112C20.4134 13.6448 20.7118 13.3777 20.9163 13.0432C21.1485 12.6633 21.2044 12.16 21.3163 11.1534L21.9013 5.88835C21.9355 5.58088 21.9525 5.42715 21.9031 5.30816C21.8597 5.20366 21.7821 5.11697 21.683 5.06228C21.5702 5 21.4155 5 21.1062 5H4.50014M2 2H3.24844C3.51306 2 3.64537 2 3.74889 2.05032C3.84002 2.09463 3.91554 2.16557 3.96544 2.25376C4.02212 2.35394 4.03037 2.48599 4.04688 2.7501L4.95312 17.2499C4.96963 17.514 4.97788 17.6461 5.03456 17.7462C5.08446 17.8344 5.15998 17.9054 5.25111 17.9497C5.35463 18 5.48694 18 5.75156 18H19M7.5 21.5H7.51M16.5 21.5H16.51M8 21.5C8 21.7761 7.77614 22 7.5 22C7.22386 22 7 21.7761 7 21.5C7 21.2239 7.22386 21 7.5 21C7.77614 21 8 21.2239 8 21.5ZM17 21.5C17 21.7761 16.7761 22 16.5 22C16.2239 22 16 21.7761 16 21.5C16 21.2239 16.2239 21 16.5 21C16.7761 21 17 21.2239 17 21.5Z"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white shadow-lg flex flex-col p-2">
          <img src="/samples/4.png" alt="" />
          <div className="">
            <h3>گردنبند طلا طرح بینهایت</h3>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div>2.700.000 تومان</div>
              <div className="w-[40px] h-[40px] flex items-center justify-center text-[#d9af73] transition-all text-sm rounded-lg bg-[#d9af75] hover:bg-[#d9a275] hover:text-[#f8e3b4]">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00014 14H18.1359C19.1487 14 19.6551 14 20.0582 13.8112C20.4134 13.6448 20.7118 13.3777 20.9163 13.0432C21.1485 12.6633 21.2044 12.16 21.3163 11.1534L21.9013 5.88835C21.9355 5.58088 21.9525 5.42715 21.9031 5.30816C21.8597 5.20366 21.7821 5.11697 21.683 5.06228C21.5702 5 21.4155 5 21.1062 5H4.50014M2 2H3.24844C3.51306 2 3.64537 2 3.74889 2.05032C3.84002 2.09463 3.91554 2.16557 3.96544 2.25376C4.02212 2.35394 4.03037 2.48599 4.04688 2.7501L4.95312 17.2499C4.96963 17.514 4.97788 17.6461 5.03456 17.7462C5.08446 17.8344 5.15998 17.9054 5.25111 17.9497C5.35463 18 5.48694 18 5.75156 18H19M7.5 21.5H7.51M16.5 21.5H16.51M8 21.5C8 21.7761 7.77614 22 7.5 22C7.22386 22 7 21.7761 7 21.5C7 21.2239 7.22386 21 7.5 21C7.77614 21 8 21.2239 8 21.5ZM17 21.5C17 21.7761 16.7761 22 16.5 22C16.2239 22 16 21.7761 16 21.5C16 21.2239 16.2239 21 16.5 21C16.7761 21 17 21.2239 17 21.5Z"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
