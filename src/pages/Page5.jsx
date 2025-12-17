import { useEffect, useState } from 'react'

const Page5 = () => {

  const [rotate, setRotate] = useState(0)
  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
       //x ki location 
      let mousex = e.clientX
      //y ki location
      let mousey = e.clientY
      // x ka center point 
      let deltaX = mousex - window.innerWidth/2
      //y ka center point
      let deltaY = mousey - window.innerHeight/2
      // angle me convert
      let angle = Math.atan2(deltaY, deltaX) * (180/Math.PI)
      //usestate me value state
      setRotate(angle - 180)
    })
  })
    //angle update on mouse move
    

   
  return (
    <div className='eyes  flex justify-center items-center bg-black w-full h-screen overflow-hidden'>
      <div className='relative  w-[45vw] rounded-full  mt-5 mb-5 h-[45vw] bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1736519120196-1a5f6632336f?q=80&w=1355&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex  pb-34 gap-3'>
      <div className='w-[12vw] flex justify-center items-center h-[12vw] rounded-full bg-zinc-100'>
        <div className='relative w-2/3 h-2/3 flex justify-center items-center rounded-full bg-black'>
          <div className="line absolute top-1/2 left-1/2 w-[100%] h-5   flex items-center" style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}>
            <div className='w-5 h-5 rounded-full bg-white ml-1'></div>
          </div>
        </div>
      </div>
      <div className='w-[12vw] flex justify-center items-center h-[12vw] rounded-full bg-zinc-100'>
        <div className='relative w-2/3 h-2/3 flex justify-center items-center rounded-full bg-black'>
          <div className="line absolute top-1/2 left-1/2 w-[100%] h-5 flex items-center" style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}>
            <div className='w-5 h-5 rounded-full bg-white ml-1'></div>
          </div>
        </div>
      </div>
      </div>
      
      </div>
    </div>
  )
}

export default Page5
