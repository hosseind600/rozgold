import React from 'react'

export default function NewsLetter() {
  return (
    <div className='bg-[#4c3d26] p-10 rounded-xl my-10 text-white flex flex-col lg:flex-row gap-5 items-center justify-between'>
        <div className="font-bold">برای دریافت <span className='text-[#d19f55]'>جدیدترین خبرها و تخفیف ها</span> ایمیل خود را وارد کنید</div>
        <div className='flex items-center gap-2'>
            <input type="email" name="email" className='w-full h-[40px] border-[1px] border-[#ffffff50] rounded-lg px-5' placeholder='ایمیل شما' />
            <button className='bg-white hover:bg-amber-100 transition-all text-[#4c3d26] px-10 flex items-center justify-center h-[40px] rounded-lg'>ثبت</button>
        </div>
    </div>
  )
}
