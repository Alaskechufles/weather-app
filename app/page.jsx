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
  const claseElemento = isActive ? "  bg-[#1E213A] md:w-[459px] w-full h-[90%] md:h-screen absolute z-20  top-0 ease-in duration-500 md:left-0" : " bg-[#1E213A] md:w-[459px] w-full h-screen absolute z-20 top-[-100%] ease-in duration-500 md:left-0"
 
  //traer datos de la API
  const [city, setCity] = useState('Arequipa');
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      const apiKey = '5865f4c96c1fa0c939787c791648058e'; 
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setForecastData(data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchForecastData();
  }, []);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = async () => {
    const apiKey = '5865f4c96c1fa0c939787c791648058e'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${apiKey}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setForecastData(data);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  
  const specificSearch1 = async () => {
    const ciudad = "london"
    const apiKey = '5865f4c96c1fa0c939787c791648058e'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${apiKey}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setForecastData(data);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  const specificSearch2 = async () => {
    const ciudad = "barcelona"
    const apiKey = '5865f4c96c1fa0c939787c791648058e'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${apiKey}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setForecastData(data);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  const specificSearch3 = async () => {
    const ciudad = "long Beach"
    const apiKey = '5865f4c96c1fa0c939787c791648058e'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${apiKey}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setForecastData(data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (

  <div className="flex flex-row bg-[#100E1D] items-center justify-center w-[1440px]">
    
    <div className={claseElemento}>
      <SearchBar btn2={toggleClass} value={city} onChange={handleInputChange} handleSearch={handleSearch} specificSearch1={specificSearch1} specificSearch2={specificSearch2} specificSearch3={specificSearch3}/>
    </div>
    <div>
        {forecastData && (

          <Face btn={toggleClass} forecastData={forecastData}/>
          
          )}

    </div>
   
     
  </div>
   
  );
}
