import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page2 = () => {
    //scrolling trigger na mouse ko niche leke jayenge to text display hota rahega
    gsap.registerPlugin(ScrollTrigger)
    
    //gsap function for animating
    useGSAP(function(){
        gsap.from(".rotatetext",{
            transform:'rotateX(-80deg)',
            opacity:0,
            duration:2,
            stagger:1,
            //scrolltrigger ko karne kaam aata hai
            scrollTrigger:{
                trigger:'rotateText',
                start:"15%",
                end:"top -150%",
                scrub:2
            }
        })
    })




  return (
    <div id='section-2' className='bg-black text-white text-center p-5 overflow-hidden'>

        <div className='rotatetext'>
            <h1 className='text-[13vw] font-[anzo2] uppercase leading-[15vw] '>Aesthetic</h1>
        </div>
        <div className='rotatetext'>
            <h1 className='text-[13vw] font-[anzo2] uppercase leading-[15vw] '>design</h1>
        </div>
        <div className='rotatetext'>
            <h1 className='text-[13vw] font-[anzo2] uppercase leading-[15vw] '>backed</h1>
        </div>
        <div className='rotatetext'>
            <h1 className='text-[13vw] font-[anzo2] uppercase leading-[15vw] '>by</h1>
        </div>
        <div className='rotatetext'>
            <h1 className='text-[13vw] font-[anzo2] uppercase leading-[15vw] '>smart</h1>
        </div>
        <div className='rotatetext'>
            <h1 className='text-[13vw] font-[anzo2] uppercase leading-[15vw] '>logic</h1>
        </div>

        <div className='h-1 w-1/3 bg-black relative left-1/2 -translate-x-1/2 mt-20'></div>
      
    </div>
  )
}

export default Page2
