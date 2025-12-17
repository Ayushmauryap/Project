import React from 'react'

const TiltText = (props) => {
  return (
    <div id='tiltDiv' ref={props.abc} className=' mt-40 ml-10'>
      <h1 className='text-[5vw] leading-[4vw] text-white uppercase font-[anzo3]'>I Am <span className='text-black'>FRONTEND </span></h1>
      <h1 className='text-[6vw] leading-[7vw] font-[anzo2] text-white '>DEVLOPER</h1>
      <h1 className='text-[5vw] leading-[4vw] text-white uppercase font-[anzo3]'>To Hire</h1>
    </div>
  )
}

export default TiltText
