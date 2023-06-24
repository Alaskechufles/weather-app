import Shower from '../public/Shower.png'
import Image from 'next/image'

export default function Card() {
  return (
    <div className=' w-[120px] bg-[#1E213A] h-[177px] '>
        <div>Tomorrow</div>
        <div>
            <Image src={Shower} alt='imagen de clima de mañana'/>
        </div>
        <div>
            <p>16°C</p>
            <p>11°C</p>
        </div>
    </div>
  )
}