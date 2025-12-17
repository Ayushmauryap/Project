import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Repeat } from 'lucide-react'
import React from 'react'

const Page1Bottom = () => {

  useGSAP(function(){
    gsap.to('#banner img',{
      rotate:360,
      duration:5,
      repeat:-1,
      ease:'linear'
    })
  })



  return (
    <div className='absolute left-0 p-20 flex items-end justify-between bottom-0 w-full'>
        <div>
            <h2 className='text-4xl font-[anzo4] text-white'>BRAND DESIGN | WEBSITE DESIGN</h2>
             <h3  className='text-4xl font-[anzo3] text-gray-500 '>
                 FREELANCE
                </h3>
        </div>
        <div id='banner'>
          <img className='mb-10 h-[5vw] w-[5vw] rounded-full' src="/assets/avatar1.svg" alt="avatar 1" />
          <img className=' h-[5vw] w-[5vw] rounded-full'  src="/assets/avatar2.svg" alt="avatar 2" />
        </div>
      
    </div>
  )
}

export default Page1Bottom
