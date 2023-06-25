"use client"
import SearchBar from "@/components/SearchBar";


import React, { useEffect, useState } from 'react';
import Face from "@/components/Face";



export default function Home() {
  //mostrar y ocultar opciones
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  }
  //desplegar barra
  const claseElemento = isActive ? " hidden  bg-[#1E213A] md:w-5/12 w-full h-screen absolute z-20 left-2 top-0 ease-in" : "bg-[#1E213A] md:w-5/12 w-full h-screen absolute z-20 left-2 top-0 ease-in"
 



  const [city, setCity] = useState('arequipa');
  const [weatherData, setWeatherData] = useState(null);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = async () => {
    if (city) {
      
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5865f4c96c1fa0c939787c791648058e`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setWeatherData(data);
        console.log(data)
      } catch (error) {
        console.log('Error:', error);
      }
    }
  };
  
  return (

  <div className="flex flex-row bg-[#100E1D] items-center justify-center w-[1440px]">
    
    <div className={claseElemento}>
      <SearchBar btn2={toggleClass} ciudad={city} buscar={handleSearch} onch={handleInputChange}/>
    </div>
    <div>
      <Face btn={toggleClass}/>
    </div>
   
     
  </div>
   
  );
}
