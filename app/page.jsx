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
  <div className=" flex justify-center items-center w-full h-screen bg-slate-500">
    {/* <SearchBar/> */}
    <div id="main" className=" flex flex-row h-[1023px]">
      <div id="search" className=" w-[459px]">
        <div className=" flex flex-row w-[459px] h-32 justify-center items-center gap-40">
          <button className=" py-2 px-5 text-white bg-gray-500 font-medium">Search for places</button>
          <div className=" bg-gray-500 flex justify-center items-center p-2 rounded-full">
            <Image src={Geo} alt="icono target"/>
          </div>
        </div>
        <div id="box-cloud" className="flex justify-center items-center p-2 flex-col">
          <div className="flex justify-center items-center w-[459px]">
            <Image src={Fondo} alt="Fondo de nubes" className=" opacity-10  object-cover w-[580px] h-[380px]"/>
          </div >
          <div className=" absolute">
            <Image src={Shower} alt="imagen de clima actual"/>
          </div>
        </div>
        <div className=" flex flex-row items-end justify-center">
          <p className=" text-[#E7E7EB] text-9xl font-medium">15</p>
          <p className=" text-[#A09FB1] text-5xl font-medium">°C</p>
        </div>
        <div className="flex justify-center items-center p-20">
          <p className="font-semibold text-4xl text-[#A09FB1]">Shower</p>
        </div>
        <div className="flex flex-row justify-center items-center gap-5 text-lg text-[#A09FB1]">
          <p>Today</p>
          <p className=" pb-2">.</p>
          <p>Fri.5 Jun</p>
        </div>
        <div className=" flex flex-row w-full justify-center items-center p-8 gap-3 text-[#A09FB1]">
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
        <div className=" font-bold text-[#E7E7EB] pt-[72px] pb-8 text-2xl">
          <p>Today&apos;s Hightlights</p>
        </div>
        <div className="flex flex-row flex-wrap gap-12">
          <div className=" w-[328px] h-[204px] bg-[#1E213A] flex flex-col justify-center items-center">
            <p className=" text-[#E7E7EB] ">Wind status</p>
            <div className="  flex flex-row items-center" >
              <p className="text-[64px] text-[#E7E7EB] font-bold">7</p>
              <p className=" text-[#E7E7EB] text-3xl pt-4">mph</p>
            </div>
            <div className=" flex flex-row items-center gap-2 pt-2">
              <div className=" text-white bg-[#616475] flex justify-center items-center p-2 rounded-full">
                <Cursor/>
              </div>
              <p className=" text-[#E7E7EB]">WSW</p>
            </div>
          </div>
          <div className=" w-[328px] h-[204px] bg-[#1E213A] flex flex-col justify-center items-center">
            <p className=" text-[#E7E7EB] ">Humidity</p>
            <div className="  flex flex-row items-center">
              <p className="text-[64px] text-[#E7E7EB] font-bold">84</p>
              <p className=" text-[#E7E7EB] text-3xl pt-4">%</p>
            </div>
            <div id="barra-de-porcentaje" className="w-[229px]">
              <div className="flex flex-row justify-between text-[#A09FB1]">
                <p>0</p>
                <p>50</p>
                <p>100</p>
              </div>
              <div className="absolute z-0 w-[229px] h-2 bg-[#E7E7EB] rounded-xl">
              </div>
              <div style={{width:`185px`}} className="absolute z-10 h-2 bg-[#FFEC65] rounded-xl"></div>
              <div className=" flex justify-end pt-2">
                <p className=" text-[#A09FB1] text-xs">%</p>
              </div>
            </div>
          </div>
          <div className=" w-[328px] h-[159px] bg-[#1E213A] flex flex-col justify-center items-center">
            <p className=" text-[#E7E7EB] font-medium">Visibility</p>
            <div className="flex flex-row gap-3 justify-center items-center">
              <p className=" text-[64px] font-bold text-[#E7E7EB]">6,4</p>
              <p className=" text-3xl text-[#E7E7EB] pt-5">miles</p>
            </div>
          </div>
          <div className=" w-[328px] h-[159px] bg-[#1E213A] flex flex-col justify-center items-center">
            <p className=" text-[#E7E7EB] font-medium">Air Pressure</p>
            <div className="flex flex-row gap-3 justify-center items-center">
              <p className=" text-[64px] font-bold text-[#E7E7EB]">998</p>
              <p className=" text-3xl text-[#E7E7EB] pt-5">mb</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
