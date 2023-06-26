import Shower from '../public/Shower.png'
import Image from 'next/image'

export default function Card({formatted,tMin,tMax,imagenSegunClima }) {
  return (
    <div className=' w-[120px] bg-[#1E213A] h-[177px] flex flex-col justify-center items-center'>
        <div className=''>
          <h2 className=" text-[#E7E7EB]">
          {formatted}
          </h2>
          </div>
        <div >
            <Image src={imagenSegunClima} alt='imagen de clima de mañana' className=' h-[62px] w-[56px]'/>
        </div>
        <div className='flex flex-row pt-8 gap-4 text-[#E7E7EB]'>
            <p>{(tMin-273.15).toFixed(0)}°C</p>
            <p>{(tMax-273.15).toFixed(0)}°C</p>
        </div>
    </div>
  )
}