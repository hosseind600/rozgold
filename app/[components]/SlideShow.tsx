import React from 'react'

export default function SlideShow() {
  return (
    <div className='bg-black h-[300px] md:h-[400px] relative overflow-hidden rounded-4xl'>
      <img src="/slide.png" className='w-full h-[400px] object-cover object-left blur-[4px] md:blur-none z-9' alt="" />
      <div className='flex flex-col items-start  absolute bottom-[5%] md:bottom-[25%] right-5 z-10 gap-5 md:gap-8 left-5 md:left-auto'>
        <h2 className='text-3xl md:text-5xl font-bold text-[#fcc756] text-shadow-lg'>
            گالری رزگلد، درخشش خاص شما
        </h2>
        <p className='text-white text-sm'>بهترین و جدیدترین محصولات طلا و جواهرات را در گالری رزگلد مشاهده کنید.</p>
        <button className='bg-[#fff] text-black px-4 py-2 rounded-lg text-sm md:text-base font-semibold'>
          مشاهده محصولات
        </button>
      </div>
    </div>
  )
}
