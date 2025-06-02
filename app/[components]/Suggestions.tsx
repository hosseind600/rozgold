import React from 'react'

export default function Suggestions() {
  return (
    <div className='flex flex-col md:flex-row gap-5'>
        <div className="flex-1 bg-[#efd38a] text-[#4d3d26] rounded-2xl relative p-5 flex items-start justify-center flex-col pl-25 md:pl-45">
            <div className="font-bold mb-2">حلقه ازدواج</div>
            <div className="text-sm mb-5 ">لیست کامل محصولات مرتبط با ازدواج و عروسی را در این صفحه مشاهده کنید</div>
            <div className='bg-[#4d3d26] text-white py-2 px-8 text-sm rounded-lg'>مشاهده همه موارد</div>
            <img src="/samples/22.png" className='absolute left-5 top-0 md:-top-[30%] w-20 md:w-40' alt="" />
        </div>
        <div className="flex-1 bg-[#4c3d26] text-[#efd38a] rounded-2xl relative p-5 flex items-start justify-center flex-col pl-25 md:pl-45">
            <div className="font-bold mb-2"> کالکشن ونکلیف</div>
            <div className="text-sm mb-5 ">لیست کامل محصولات مرتبط با ونکلیف را در این صفحه مشاهده کنید</div>
            <div className='bg-[#efd38a] text-[#4c3d26] py-2 px-8 text-sm rounded-lg'>مشاهده همه موارد</div>
                        <img src="/samples/11.png" className='absolute left-5 top-0 md:-top-[30%] w-20 md:w-40' alt="" />

        </div>

      
    </div>
  )
}
