import SearchBar from "@/components/SearchBar";
/* import Target from "@/public/Target"; */
import Image from "next/image";
import Shower from  '../public/Shower.png'
import Geo from '../public/TargetW.png'
import GeoIcon from "@/public/GeoIcon";
import Card from "@/components/Card";
import Cursor from "@/public/Cursor";
import Fondo from '@/public/Cloud-background.png'

export default function Home() {

  return (
  <div>
    {/* <SearchBar/> */}
    <div id="main" className=" flex flex-row">
      <div id="search" className=" w-[459px]">
        <div className=" flex flex-row w-[459px] h-32 justify-center items-center gap-40">
          <button className=" py-2 px-5 text-white bg-gray-500 font-medium">Search for places</button>
          <div className=" bg-gray-500 flex justify-center items-center p-2 rounded-full">
            <Image src={Geo} alt="icono target"/>
          </div>
        </div>
        <div id="box-cloud" className="flex justify-center items-center p-20 flex-col">
          <div className="flex justify-center items-center absolute w-[459px]">
            <Image src={Fondo} alt="Fondo de nubes" className=" opacity-10 max-w-[540px] object-cover"/>
          </div>
          <Image src={Shower} alt="imagen de clima actual"/>
        </div>
        <div className=" flex flex-row items-end justify-center">
          <p className=" text-white text-9xl font-medium">15</p>
          <p className=" text-gray-400 text-5xl font-medium">°C</p>
        </div>
        <div className="flex justify-center items-center p-20">
          <p className="font-semibold text-4xl text-gray-400">Shower</p>
        </div>
        <div className="flex flex-row justify-center items-center gap-5 text-lg text-gray-400">
          <p>Today</p>
          <p className=" pb-2">.</p>
          <p>Fri.5 Jun</p>
        </div>
        <div className=" flex flex-row w-full justify-center items-center p-8 gap-3 text-gray-400">
          <div>
            <GeoIcon/>
          </div>
          <p className=" text-lg">Helsinki</p>
        </div>
      </div>
      <div className=" w-2/3 flex flex-col px-32">
        <div className="flex flex-row h-32 items-center justify-end gap-3">
          <div className=" text-lg w-12 h-12 bg-gray-400 rounded-full font-bold flex justify-center items-center">
            <button>°C</button>
          </div>
          <div className=" text-lg w-12 h-12 bg-gray-700 rounded-full font-bold flex justify-center items-center text-white">
            <button >°F</button>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-6"> 
         {/*Aqui insertar componente de carta*/}
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
        </div>
        <div>
          <p>Today&apos;s Hightlights</p>
        </div>
        <div>
          <div>
            <p>Wind status</p>
            <div>
              <p>7</p>
              <p>mph</p>
            </div>
            <div>
              <Cursor/>
              <p>WSW</p>
            </div>
          </div>
          <div>
            <p>Humidity</p>
            <div>
              <p>84</p>
              <p>%</p>
            </div>
            <div id="barra-de-porcentaje">
            </div>
          </div>
          <div>
            <p>Visibility</p>
            <div>
              <p>6,4</p>
              <p>miles</p>
            </div>
          </div>
          <div>
            <p>Air Pressure</p>
            <div>
              <p>998</p>
              <p>mb</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
