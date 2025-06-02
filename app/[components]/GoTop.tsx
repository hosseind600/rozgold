"use client"
import React from 'react'

export default function GoTop() {
  return (
        <div className="fixed bottom-10 right-10 z-50 w-[50px] h-[50px] bg-[#d9af73] rounded-xl flex items-center justify-center cursor-pointer hover:bg-[#d99373] transition-all duration-300 ease-in-out">
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label="Go to top"
      style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
    >
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
        d="M6 15L12 9L18 15"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        />
      </svg>
    </button>
    </div>
  )
}
