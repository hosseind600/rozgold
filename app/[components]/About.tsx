import React from 'react'

export default function About() {
  return (
    <div className='my-10 flex flex-col md:flex-row'>
        <div className="flex-1 flex flex-col gap-5 md:pt-20">
            <h2 className='font-bold text-xl'>درباره گالری <span className='text-[#d9af73]'>رزگلد</span></h2>
            <div className='text-sm text-gray-700 flex flex-col'>
            <p>یک متن معرفی در مورد رز گلد . رزگلد یک فروشگاه اینترنتی فعال در حوزه فروش جواهرات و سنگ های زینتی می باشد<br/>
                 فروش آنلاین این محصولات به همراه گارانتی معتبر و بیمه پستی می باشد
            یک متن معرفی در مورد رز گلد . رزگلد یک فروشگاه اینترنتی فعال در حوزه فروش جواهرات و سنگ های زینتی می باشد
                 فروش آنلاین این محصولات به همراه گارانتی معتبر و بیمه پستی می باشد
            </p>
            </div>
        </div>
        <img src="/who.png" className='w-full md:w-[50%]' alt="" />
    </div>
  )
}
