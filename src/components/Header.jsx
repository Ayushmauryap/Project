
import { FingerprintPattern } from 'lucide-react'

const Header = () => {
  const nav = ["Services","Our Work","About us","Insight","Contact"]
  
  return (
   <div  className='fixed z-[999]  text-white w-full px-20 py-8 font-[anzo3] flex justify-between items-center '>
    <div >
        <FingerprintPattern className='text-white ' size={30} />
    </div>
    <div className="links  flex gap-10">
      {nav.map((items,idx)=>{
        return <a key={idx} className={` cursor-pointer active:scale-95 text-lg capitalize front-light  ${idx ===4 && "ml-32"}`} >{items}</a>
      })}
      

    </div>
   </div>
  )
}

export default Header
