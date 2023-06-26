import SearchBar from "@/components/SearchBar";
/* import Target from "@/public/Target"; */
import Image from "next/image";
//imagenes segun el clima
import Shower from '../public/Shower.png'
import Clear from '../public/Clear.png'
import Hail from '../public/Hail.png'
import HeavyCloud from '../public/HeavyCloud.png'
import HeavyRain from '../public/HeavyRain.png'
import LightCloud from '../public/LightCloud.png'
import LightRain from '../public/LightRain.png'
import Sleet from '../public/Sleet.png'
import Snow from '../public/Snow.png'
import Thunderstorm from '../public/Thunderstorm.png'
//fin imahenes segun el clima
import Geo from '../public/TargetW.png'
import GeoIcon from "@/public/GeoIcon";
import Card from "@/components/Card";
import Cursor from "@/public/Cursor";
import Fondo from '@/public/Cloud-background.png'

import React, { useEffect, useState } from 'react';

export default function Face({ btn, forecastData }) {
  //prueba cambio de °C a °F
  const [isActive, setIsActive] = useState(false);
  const toggleTemp = () => {
    setIsActive(!isActive);
  }
  const tempType = isActive ? ((((forecastData.list[0].main.temp) - 273.15) * 9 / 5) + 32).toFixed(0) : ((forecastData.list[0].main.temp) - 273.15).toFixed(0)
  const tempType2 = isActive ? ((((forecastData.list[12].main.temp_min) - 273.15) * 9 / 5) + 32).toFixed(0) : ((forecastData.list[12].main.temp_min) - 273.15).toFixed(0)
  const tempType3 = isActive ? ((((forecastData.list[20].main.temp_min) - 273.15) * 9 / 5) + 32).toFixed(0) : ((forecastData.list[20].main.temp_min) - 273.15).toFixed(0)
  const tempType4 = isActive ? ((((forecastData.list[28].main.temp_min) - 273.15) * 9 / 5) + 32).toFixed(0) : ((forecastData.list[28].main.temp_min) - 273.15).toFixed(0)
  const tempType5 = isActive ? ((((forecastData.list[36].main.temp_min) - 273.15) * 9 / 5) + 32).toFixed(0) : ((forecastData.list[36].main.temp_min) - 273.15).toFixed(0)
  const tempType6 = isActive ? ((((forecastData.list[39].main.temp_min) - 273.15) * 9 / 5) + 32).toFixed(0) : ((forecastData.list[39].main.temp_min) - 273.15).toFixed(0)

  const tempType2M = isActive ? ((((forecastData.list[12].main.temp_max) - 273.15) * 9 / 5) + 32).toFixed(0) : ((forecastData.list[12].main.temp_max) - 273.15).toFixed(0)
  const tempType3M = isActive ? ((((forecastData.list[20].main.temp_max) - 273.15) * 9 / 5) + 32).toFixed(0) : ((forecastData.list[20].main.temp_max) - 273.15).toFixed(0)
  const tempType4M = isActive ? ((((forecastData.list[28].main.temp_max) - 273.15) * 9 / 5) + 32).toFixed(0) : ((forecastData.list[28].main.temp_max) - 273.15).toFixed(0)
  const tempType5M = isActive ? ((((forecastData.list[36].main.temp_max) - 273.15) * 9 / 5) + 32).toFixed(0) : ((forecastData.list[36].main.temp_max) - 273.15).toFixed(0)
  const tempType6M = isActive ? ((((forecastData.list[39].main.temp_max) - 273.15) * 9 / 5) + 32).toFixed(0) : ((forecastData.list[39].main.temp_max) - 273.15).toFixed(0)
  //para cambiar las unidades de °F o °C
  const tempUnit = isActive ? "°F" : "°C"

  //para formatear la fecha
  const timestamp = forecastData.list[4].dt// Ejemplo de marca de tiempo
  const date = new Date(timestamp * 1000);

  const options = { weekday: 'short', day: 'numeric', month: 'short' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  //fin de formatear la fecha
  //agregar los dias de las cartas
  const dayT2 = forecastData.list[20].dt
  const date2 = new Date(dayT2 * 1000)
  const optionsT = { weekday: 'long' }
  const formatted2 = date2.toLocaleDateString('en-US', optionsT);
  console.log(formatted2)
  const dayT3 = forecastData.list[28].dt
  const date3 = new Date(dayT3 * 1000)
  const formatted3 = date3.toLocaleDateString('en-US', optionsT);
  console.log(formatted3)
  const dayT4 = forecastData.list[36].dt
  const date4 = new Date(dayT4 * 1000)
  const formatted4 = date4.toLocaleDateString('en-US', optionsT);
  console.log(formatted4)
  const dayT5 = forecastData.list[39].dt
  const date5 = new Date(dayT5 * 1000)
  const formatted5 = date5.toLocaleDateString('en-US', optionsT);
  console.log(formatted5)

  //fin agregar los dias de las cartas
  //para cambiar la img del clima
  const obtenerImg = (idClima) => {
    const imgClima = [Shower, Clear, Hail, HeavyCloud, HeavyRain, LightCloud, LightRain, Sleet, Snow, Thunderstorm]
    let index = 0
    console.log(index)

    if (idClima >= 200 && idClima <= 232) {
      index += 9
    } else if (idClima >= 300 && idClima <= 321) {
      index += 6
    } else if (idClima >= 500 && idClima <= 531 && idClima !== 511) {
      index += 0
    } else if (idClima === 511) {
      index += 7
    } else if (idClima >= 600 && idClima <= 612) {
      index += 8
    } else if (idClima >= 613 && idClima <= 622) {
      index += 2
    } else if (idClima == 801 || idClima == 802) {
      index += 5
    } else if (idClima == 803 || idClima == 804) {
      index += 3
    } else if (idClima === 800) {
      index += 1
    } else {
      index = 0
    }
    console.log(index)
    return imgClima[index]
  }
  const idSegunClima = forecastData.list[0].weather[0].id
  const idSegunClima2 = forecastData.list[12].weather[0].id
  const idSegunClima3 = forecastData.list[20].weather[0].id
  const idSegunClima4 = forecastData.list[28].weather[0].id
  const idSegunClima5 = forecastData.list[36].weather[0].id
  const idSegunClima6 = forecastData.list[39].weather[0].id
  console.log(idSegunClima)
  const imagenSegunClima = obtenerImg(idSegunClima)
  const imagenSegunClima2 = obtenerImg(idSegunClima2)
  const imagenSegunClima3 = obtenerImg(idSegunClima3)
  const imagenSegunClima4 = obtenerImg(idSegunClima4)
  const imagenSegunClima5 = obtenerImg(idSegunClima5)
  const imagenSegunClima6 = obtenerImg(idSegunClima6)
  console.log(imagenSegunClima)

  //fin para cambiar img del clima
  //para cambiar direccion del viento de grados a direccion
  const obtenerDireccionViento = (grados) => {
    const direccion = [
      "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
      "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW",
    ];

    const indice = Math.round(grados / 22.5) % 16;
    return direccion[indice];
  };

  // Uso de la función auxiliar para comvertir grados a direccion cardinal
  const direccionVientoGrados = forecastData.list[0].wind.deg; // Ejemplo de valor en grados
  const direccionViento = obtenerDireccionViento(direccionVientoGrados);

  console.log(direccionViento);
  // fin de direccion del viento
  // para cambiar la direccion del cursor segun la direccion del viento
  const obtenerDireccionCursor = (grados) => {
    const orientacion = [
      /* "-45","-22.5","0","22.5","45","67.5","90","112.5","135","157.5","180","202.5","225","247.5","270","292.5" Estos son los grados que definen la direccion de los puntos cardinales*/ 
      "rotate-[-45deg]", "rotate-[-22.5deg]", "rotate-[0deg]", "rotate-[22.5deg]", "rotate-[45deg]", "rotate-[67.5deg]", "rotate-[90deg]", "rotate-[112.5deg]", "rotate-[135deg]", "rotate-[157.5deg]", "rotate-[180deg]", "rotate-[202.5deg]", "rotate-[225deg]", "rotate-[247.5deg]", "rotate-[270deg]", "rotate-[292.5deg]",
    ]
    const indiceD = Math.round(grados / 22.5) % 16;
    return orientacion[indiceD]
  }

  const direccionCursor = obtenerDireccionCursor(direccionVientoGrados)



  return (

    <div className=" flex justify-center items-center   md:flex-row flex-col md:w-[1440px] object-contain">
      <div id="main" className=" flex md:flex-row w-screen flex-col justify-center items-center md:h-screen md:w-[1440px] ">
        <div id="search" className=" w-full md:w-[459px] " >
          <div className=" flex flex-row w-full h-32 justify-center items-center gap-40">
            <button onClick={btn} id="button-toggle" className=" py-2 px-5 text-white bg-gray-500 font-medium">Search for places</button>
            <button onClick={btn} className=" bg-gray-500 flex justify-center items-center p-2 rounded-full">
              <Image src={Geo} alt="icono target" />
            </button>
          </div>
          <div id="box-cloud" className="flex justify-center items-center p-0 flex-col">
            <div className="flex justify-center items-center w-full">
              <Image src={Fondo} alt="Fondo de nubes" className=" opacity-10  object-cover w-full h-[380px]" />
            </div >
            <div className=" absolute">
              <Image src={imagenSegunClima} alt="imagen de clima actual" className=" w-[200px] h-[230px]" />
            </div>
          </div>
          <div className=" flex flex-row items-end justify-center">
            <p className=" text-[#E7E7EB] text-9xl font-medium">{tempType}</p>
            <p className=" text-[#A09FB1] text-5xl font-medium">{tempUnit}</p>
          </div>
          <div className="flex justify-center items-center p-20">
            <p className="font-semibold text-4xl text-[#A09FB1]">{forecastData.list[0].weather[0].main}</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-5 text-lg text-[#A09FB1]">
            <p>Today</p>
            <p className=" pb-2">.</p>
            <p>{formattedDate}</p>
          </div>
          <div className=" flex flex-row w-full justify-center items-center px-8 py-4 gap-3 text-[#A09FB1]">
            <div >
              <GeoIcon />
            </div>
            <p className=" text-lg">{forecastData.city.name}</p>
          </div>
        </div>
        <div className=" flex flex-col  bg-[#100E1D] w-full items-center md:w-[981px] md:h-screen justify-center md:pb-12">
          <div className="flex flex-row h-32 items-center md:justify-end gap-3 md:w-full w-4/5 justify-center md:pr-40">
            <div className=" text-lg w-12 h-12 bg-[#E7E7EB] rounded-full font-bold flex justify-center items-center hover:cursor-pointer">
              <button className=" text-lg w-12 h-12 bg-[#E7E7EB] rounded-full font-bold flex justify-center items-center hover:cursor-pointer" onClick={toggleTemp}>°C</button>
            </div>
            <div className=" text-lg w-12 h-12 bg-[#585676] rounded-full font-bold flex justify-center items-center text-white hover:cursor-pointer">
              <button className=" text-lg w-12 h-12 bg-[#585676] rounded-full font-bold flex justify-center items-center text-white hover:cursor-pointer" onClick={toggleTemp}>°F</button>
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-6 w-full md:w-[980px] justify-center p-10 md:p-0">
            {/*Aqui insertar componente de carta*/}
            <Card formatted={"Tomorrow"} tMin={tempType2} tMax={tempType2M} imagenSegunClima={imagenSegunClima2} tempUnit={tempUnit} />
            <Card formatted={formatted2} tMin={tempType3} tMax={tempType3M} imagenSegunClima={imagenSegunClima3} tempUnit={tempUnit} />
            <Card formatted={formatted3} tMin={tempType4} tMax={tempType4M} imagenSegunClima={imagenSegunClima4} tempUnit={tempUnit} />
            <Card formatted={formatted4} tMin={tempType5} tMax={tempType5M} imagenSegunClima={imagenSegunClima5} tempUnit={tempUnit} />
            <Card formatted={formatted5} tMin={tempType6} tMax={tempType6M} imagenSegunClima={imagenSegunClima6} tempUnit={tempUnit} />
          </div>
          <div className=" font-bold text-[#E7E7EB] pt-[72px] pb-8 text-2xl">
            <p>Today&apos;s Hightlights</p>
          </div>
          <div className="flex flex-row flex-wrap gap-12 justify-center mb-20 md:mb-5 w-full">
            <div className=" w-[328px] h-[204px] bg-[#1E213A] flex flex-col justify-center items-center">
              <p className=" text-[#E7E7EB] ">Wind status</p>
              <div className="  flex flex-row items-center" >
                <p className="text-[64px] text-[#E7E7EB] font-bold">{((forecastData.list[0].wind.speed) * (2.237)).toFixed(0)}</p>
                <p className=" text-[#E7E7EB] text-3xl pt-4">mph</p>
              </div>
              <div className=" flex flex-row items-center gap-2 pt-2">
                <div className=" text-white bg-[#616475] flex justify-center items-center p-2 rounded-full rotate-[deg]">
                  <div className={direccionCursor}>
                    <Cursor />
                  </div>
                </div>
                <p className=" text-[#E7E7EB]">{direccionViento}</p>
              </div>
            </div>
            <div className=" w-[328px] h-[204px] bg-[#1E213A] flex flex-col justify-center items-center">
              <p className=" text-[#E7E7EB] ">Humidity</p>
              <div className="  flex flex-row items-center">
                <p className="text-[64px] text-[#E7E7EB] font-bold">{forecastData.list[0].main.humidity}</p>
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
                {/* Aquí usamos la regla de 3 simple para covertir el porcentaje de humedad en tamaño de pixeles de la barra amarilla sobre la blanca */}
                <div style={{ width: `${2.29 * (forecastData.list[0].main.humidity)}px` }} className="absolute z-10 h-2 bg-[#FFEC65] rounded-xl"></div>
                <div className=" flex justify-end pt-2">
                  <p className=" text-[#A09FB1] text-xs">%</p>
                </div>
              </div>
            </div>
            <div className=" w-[328px] h-[159px] bg-[#1E213A] flex flex-col justify-center items-center">
              <p className=" text-[#E7E7EB] font-medium">Visibility</p>
              <div className="flex flex-row gap-3 justify-center items-center">
                <p className=" text-[64px] font-bold text-[#E7E7EB]">{(((forecastData.list[0].visibility) / 1000) / 1.609).toFixed(1)}</p>
                <p className=" text-3xl text-[#E7E7EB] pt-5">miles</p>
              </div>
            </div>
            <div className=" w-[328px] h-[159px] bg-[#1E213A] flex flex-col justify-center items-center">
              <p className=" text-[#E7E7EB] font-medium">Air Pressure</p>
              <div className="flex flex-row gap-3 justify-center items-center">
                <p className=" text-[64px] font-bold text-[#E7E7EB]">{forecastData.list[0].main.pressure}</p>
                <p className=" text-3xl text-[#E7E7EB] pt-5">mb</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
