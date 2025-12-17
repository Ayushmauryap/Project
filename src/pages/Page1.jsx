import React, { useRef, useState, useEffect } from 'react'
import Page1Bottom from '../components/Page1Bottom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import TiltText from '../components/TiltText'

const Page1 = () => {
    //taking refrence starting value is 0
    const tiltRef = useRef(null)
    //both X&Y use for dividing the degree value
    const [xVal, setXVal] = useState(0)
    const [yVal, setYVal] = useState(0)

    //function banaya mouse ke movement ko dekh ne ke liye

    const mouseMoving = (e) => {
        //div ke width ke center pe aane ke liye pure x axis me se jitna gap hai vo minus kiya fir jo width tha usko divide by 2 kar ka usko minus kiya
        setXVal((e.clientX- tiltRef.current.getBoundingClientRect().x -tiltRef.current.getBoundingClientRect().width/2)/70);
        setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/20)
        
        
        //inisilizing the value to the style so the div can move par ye bohto hard move ho rha hai 

        // tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`
        
        
    }
    //using gsap for smooth move
    useGSAP(function( ){
        gsap.to(tiltRef.current,{
            transform:`rotateX(${yVal}deg) rotateY(${xVal}deg)`,
            duration:5,
            ease:'power4.out'

        })
    },[xVal,yVal])
    
    
    
    return (
        //taking mouse movement
        <div onMouseMove={(e) => {
            mouseMoving(e)
        }} className='h-screen p-7  relative bg-black overflow-hidden'>
            {/* // giving id page1-in for perspective */}
            <div id='page1-in' className=' px-10 py-10 shadow-xl shadow-gray-500 h-full w-full rounded-[20px]  bg-[url(./assets/emile-perron-xrVDYZRGdw4-unsplash.jpg)] bg-cover '>
              


                {/* //taking ref value from here
                //giving id tiltDiv  */}
                <TiltText abc={tiltRef} />
                
                <Page1Bottom />
            </div>


        </div>
    )
}

export default Page1
