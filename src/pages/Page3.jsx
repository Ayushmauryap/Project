import { easeInOut, motion } from 'framer-motion'
import gsap from 'gsap'
import {ArrowUpFromDot} from 'lucide-react'

const Page3 = () => {
  gsap
  
    const text =["We create","eye opening","Presentation"]
    const innertext = ['For Public and Private companies', 'From the frist pitch to ipo']
  return (

    <div className=' w-full h-screen bg-[url(".\assets\img.jpg")] bg-cover bg-center pt-1'>
      <div className='textstructure mt-40 px-20'>
        {text.map((item,idx)=>{
          return <div key={idx} className='masker  overflow-hidden '>
            <div className='w-fit flex items-center'>
              {idx===1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1], duration:2, repeat:[2]}} className='w-[9vw] h-[5.7vw] relative rounded top-[0.5vw] bg-[url(".\assets\img.jpg")] bg-cover bg-center'></motion.div>)}
              


                <h1 className='uppercase text-white text-[8vw]  tracking-tighter  leading-[7.5vw] ' >{item}</h1>
            </div>
            </div>

})}

      </div>
      <div className='border-t flex text-white pt-3 px-20 font-[anzo1] justify-between border-zinc-800 mt-32'>
        {innertext.map((item,idx)=>{
          return <p key={idx}  className=' text-md font-light pt-4 tracking-tight uppercase leading-none'>{item}</p>
        })}
        <div className='start cursor-pointer active:scale-95 flex gap-1 '>
          <div className='px-5   py-2 font-light text-l uppercase  border-2 border-zinc-500 rounded-full '>Start the project

          </div>
            <div className='w-10 h-10  border-2 border-zinc-500flex justify-center rounded-full'>
              <span className='rotate  flex justify-center pt-2'><ArrowUpFromDot /></span>
            </div>
        </div>

      </div>
        </div>
  )
}

export default Page3
