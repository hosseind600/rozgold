import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-2 px-4 pb-[50px] md:pb-2 relative">
      <div className="flex items-center gap-10 ">
        <div className="text-2xl font-bold flex gap-1 items-center">
          <img src="/logo.png" alt="Logo" className="md:h-[63px] md:w-[89px] w-[62px] h-[44px]" />
          <h1>
            گالری <span>رزگلد</span>
          </h1>
        </div>
        <nav className="absolute md:relative top-[60px] md:top-auto px-[50px] md:px-0 bg-gray-100 md:bg-transparent text-sm right-0 md:right-auto w-full md:w-auto ">
          <ul className="flex gap-5 md:gap-3">
            <li className="py-1 border-b-4 border-[#e6a51b]">
              <a href="/">خانه</a>
            </li>
            <li className="py-1">
              <a href="/about">محصولات</a>
            </li>
            <li className="py-1">
              <a href="/blog">خواندنی ها</a>
            </li>
            <li className="py-1">
              <a href="/about">درباره ما</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-1 items-center">
        <form className="relative hidden md:block">
          <input
            type="text"
            placeholder="جستجو..."
            className="border border-gray-300 rounded px-2 h-[40px]"
          />
          <button className="absolute left-2 top-[50%] transform -translate-y-1/2">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                stroke="#00000050"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
        <a
          href="/search"
          className="border border-gray-300 rounded px-2 h-[40px] text-[#00000080]  items-center justify-center gap-2 flex md:hidden"
        >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                stroke="#00000050"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
        </a>
        <a
          href="/cart"
          className="border border-gray-300 rounded px-2 h-[40px] text-[#00000080] flex items-center justify-center gap-2"
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.00014 14H18.1359C19.1487 14 19.6551 14 20.0582 13.8112C20.4134 13.6448 20.7118 13.3777 20.9163 13.0432C21.1485 12.6633 21.2044 12.16 21.3163 11.1534L21.9013 5.88835C21.9355 5.58088 21.9525 5.42715 21.9031 5.30816C21.8597 5.20366 21.7821 5.11697 21.683 5.06228C21.5702 5 21.4155 5 21.1062 5H4.50014M2 2H3.24844C3.51306 2 3.64537 2 3.74889 2.05032C3.84002 2.09463 3.91554 2.16557 3.96544 2.25376C4.02212 2.35394 4.03037 2.48599 4.04688 2.7501L4.95312 17.2499C4.96963 17.514 4.97788 17.6461 5.03456 17.7462C5.08446 17.8344 5.15998 17.9054 5.25111 17.9497C5.35463 18 5.48694 18 5.75156 18H19M7.5 21.5H7.51M16.5 21.5H16.51M8 21.5C8 21.7761 7.77614 22 7.5 22C7.22386 22 7 21.7761 7 21.5C7 21.2239 7.22386 21 7.5 21C7.77614 21 8 21.2239 8 21.5ZM17 21.5C17 21.7761 16.7761 22 16.5 22C16.2239 22 16 21.7761 16 21.5C16 21.2239 16.2239 21 16.5 21C16.7761 21 17 21.2239 17 21.5Z"
              stroke="#00000080"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a
          href="/login"
          className="border border-gray-300 rounded px-2 h-[40px] text-[#00000080] flex items-center justify-center gap-2"
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
              stroke="#00000080"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="hidden lg:block">ورود / ثبت نام</span>
        </a>
      </div>
    </header>
  );
}
