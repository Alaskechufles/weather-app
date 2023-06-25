import SearchBar from "@/components/SearchBar";
/* import Target from "@/public/Target"; */
import Image from "next/image";
import Shower from  '../public/Shower.png'
import Geo from '../public/TargetW.png'
import GeoIcon from "@/public/GeoIcon";
import Card from "@/components/Card";
import Cursor from "@/public/Cursor";
import Fondo from '@/public/Cloud-background.png'

/* import React, { useEffect, useState } from 'react'; */



export default function Face(prop) {
/*   const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const ciudad = ''
  const url = 'https://api.openweathermap.org/data/2.5/forecast?q=lima&appid=5865f4c96c1fa0c939787c791648058e'

  const fetchData = async () => {
    try {
      const response = await fetch('');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  }; */


  return (
  <div className=" flex justify-center items-center   md:flex-row flex-col ">
    {/* <SearchBar/> */}
    <div id="main" className=" flex md:flex-row w-screen flex-col justify-center items-center md:h-screen ">
      <div id="search" className=" w-full md:w-[459px] " >
        <div className=" flex flex-row w-full h-32 justify-center items-center gap-40">
          <button onClick={prop.btn} id="button-toggle" className=" py-2 px-5 text-white bg-gray-500 font-medium">Search for places</button>
          <div className=" bg-gray-500 flex justify-center items-center p-2 rounded-full">
            <Image src={Geo} alt="icono target"/>
          </div>
        </div>
        <div id="box-cloud" className="flex justify-center items-center p-0 flex-col">
          <div className="flex justify-center items-center w-full">
            <Image src={Fondo} alt="Fondo de nubes" className=" opacity-10  object-cover w-full h-[380px]"/>
          </div >
          <div className=" absolute">
            <Image src={Shower} alt="imagen de clima actual" className=" w-[200px] h-[230px]"/>
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
        <div className=" flex flex-row w-full justify-center items-center px-8 py-4 gap-3 text-[#A09FB1]">
          <div>
            <GeoIcon/>
          </div>
          <p className=" text-lg">Helsinki</p>
        </div>
      </div>
      <div className=" flex flex-col  bg-[#100E1D] w-full items-center md:w-[981px] md:h-screen justify-center md:pb-12">
        <div className="flex flex-row h-32 items-center md:justify-end gap-3 md:w-full w-4/5 justify-center">
          <div className=" text-lg w-12 h-12 bg-[#E7E7EB] rounded-full font-bold flex justify-center items-center">
            <button className=" font-bold">°C</button>
          </div>
          <div className=" text-lg w-12 h-12 bg-[#585676] rounded-full font-bold flex justify-center items-center text-white">
            <button >°F</button>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-6 w-full md:w-[980px] justify-center p-10 md:p-0"> 
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
        <div className="flex flex-row flex-wrap gap-12 justify-center mb-20 md:mb-5 w-full">
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
