"use client"
import SearchBar from "@/components/SearchBar";


import React, { useEffect, useState } from 'react';
import Face from "@/components/Face";



export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const ciudad = ''
  const url = 'https://api.openweathermap.org/data/2.5/forecast?q=lima&appid=5865f4c96c1fa0c939787c791648058e'

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=lima&appid=5865f4c96c1fa0c939787c791648058e');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };


  return (
  <div className="flex flex-row bg-[#100E1D] items-center justify-center w-[1440px]">
    <div className=" hidden  bg-[#1E213A] w-full h-[1023px] absolute z-20 left-2">
      <SearchBar/>
    </div>
    <div>
      <Face/>
    </div>
  </div>
   
  );
}
