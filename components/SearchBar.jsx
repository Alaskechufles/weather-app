import SearchIcon from "@/public/SearchIcon";
import XIcon from "@/public/XIcon";
import React, { useState } from 'react';

export default function SearchBar({btn2,value,onChange,handleSearch,specificSearch1,specificSearch2,specificSearch3}) {
  return (
    <div className=" text-[#E7E7EB] flex flex-col p-10 items-end">
        <div className=" flex justify-center items-center h-10 font-bold pr-10 pt-5">
            <button onClick={btn2}>    
                <XIcon/>
            </button>
        </div>
        <div className="flex flex-row justify-center items-center gap-3 h-24 ">
            <div className="flex flex-row justify-center items-center border border-white h-12 w-[60%] md:w-[80%] gap-3 p-2">
                <div className=" text-[#616475]">    
                    <SearchIcon/>
                </div>
                <input id="locationInput"  value={value} onChange={onChange} type="text" placeholder="search location" className=" h-10 bg-[#1E213A] placeholder:text-[#616475] outline-none w-full"/>
            </div>
            <button className=" bg-[#3C47E9] p-[15px]" onClick={()=>{handleSearch();btn2()}}>Search</button>
        </div>
        <div className="flex flex-col w-full justify-center items-center ">
            <button onClick={()=>{specificSearch1();btn2()}} value="London" className=" flex flex-row justify-between items-center w-2/3 h-16 hover:border hover:border-[#616475] pl-3 pr-2">
                London      
            </button>
            <button  onClick={()=>{specificSearch2();btn2()}} value="Arequipa" className=" flex flex-row justify-between items-center w-2/3 h-16 hover:border hover:border-[#616475] pl-3 pr-2">
                Barcelona     
            </button>
            <button onClick={()=>{specificSearch3();btn2()}} value="Lima" className=" flex flex-row justify-between items-center w-2/3 h-16 hover:border hover:border-[#616475] pl-3 pr-2">
                Long Beach     
            </button>
        </div>
    </div>
  )
}