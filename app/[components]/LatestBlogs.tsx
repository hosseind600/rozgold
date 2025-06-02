import React from 'react'

export default function LatestBlogs() {
  return (
      <div className="my-15">
      <div className="  flex justify-between mb-5">
        <div className="flex flex-col">
          <span className="text-gray-600 text-lg font-bold">  آخرین مطالب <span className="text-[#d9af73]"> بلاگ</span>  </span>
        </div>
        <div className="flex gap-4 items-end">
           <button className="h-[40px] px-10 flex items-center justify-center text-[#d9af73] transition-all text-sm rounded-lg bg-[#f4e7d4] hover:bg-[#d9af73] hover:text-[#f8e3b4]">
              رفتن به بلاگ
            </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
   
        <div className="rounded-xl bg-white shadow-lg flex flex-col p-2">
          <img className="rounded-xl" src="/samples/b1.png" alt="" />
          <div className='flex flex-col py-5 px-2 gap-2'>
            <h3 className='font-bold'>کادو و هدیه طلا برای خانم ها</h3>
            <p className='text-sm text-gray-700 text-justify'>یک متن کوتاه برای خلاصه این بلاگ هست  که برای نمایش نمادین در قالب سایت استفاده میشود . برای زیبایی بیشتر سعی میشود کلمات متفاوت باشند</p>
          </div>
        </div>
        <div className="rounded-xl bg-white shadow-lg flex flex-col p-2">
          <img className="rounded-xl" src="/samples/b2.png" alt="" />
          <div className='flex flex-col py-5 px-2 gap-2'>
            <h3 className='font-bold'>گوشواره مناسب لباسهای یقه بسته </h3>
            <p className='text-sm text-gray-700 text-justify'>یک متن کوتاه برای خلاصه این بلاگ هست  که برای نمایش نمادین در قالب سایت استفاده میشود . برای زیبایی بیشتر سعی میشود کلمات متفاوت باشند</p>
          </div>
        </div>
        <div className="rounded-xl bg-white shadow-lg flex flex-col p-2">
          <img className="rounded-xl" src="/samples/b3.png" alt="" />
          <div className='flex flex-col py-5 px-2 gap-2'>
            <h3 className='font-bold'>ترند های محبوب انگشتر های طلا</h3>
            <p className='text-sm text-gray-700 text-justify'>یک متن کوتاه برای خلاصه این بلاگ هست  که برای نمایش نمادین در قالب سایت استفاده میشود . برای زیبایی بیشتر سعی میشود کلمات متفاوت باشند</p>
          </div>
        </div>
        <div className="rounded-xl bg-white shadow-lg flex flex-col p-2">
          <img className="rounded-xl" src="/samples/b4.png" alt="" />
          <div className='flex flex-col py-5 px-2 gap-2'>
            <h3 className='font-bold'>راهنمای خرید دستبند زنانه</h3>
            <p className='text-sm text-gray-700 text-justify'>یک متن کوتاه برای خلاصه این بلاگ هست  که برای نمایش نمادین در قالب سایت استفاده میشود . برای زیبایی بیشتر سعی میشود کلمات متفاوت باشند</p>
          </div>
        </div>
   
      


      </div>
    </div>
  )
}
