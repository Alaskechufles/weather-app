import SearchIcon from "@/public/SearchIcon";
import XIcon from "@/public/XIcon";

export default function SearchBar(prop) {
  return (
    <div className=" text-[#E7E7EB] flex flex-col p-10 items-end">
        <div className=" flex justify-center items-center h-10 font-bold pr-10 pt-5">
            <button onClick={prop.btn2}>    
                <XIcon/>
            </button>
        </div>
        <div className="flex flex-row justify-center items-center gap-3 h-24 ">
            <div className="flex flex-row justify-center items-center border border-white h-12 w-[268px] gap-3">
                <div className=" text-[#616475]">    
                    <SearchIcon/>
                </div>
                <input value={prop.ciudad} onChange={prop.onch} type="text" placeholder="search location" className=" h-10 bg-[#1E213A] placeholder:text-[#616475]"/>
            </div>
            <button className=" bg-[#3C47E9] p-[15px]" onClick={prop.buscar}>Search</button>
        </div>
        <div className="flex flex-col w-[465px] justify-center items-center ">
            <div  className=" flex flex-row justify-between items-center w-[367px] h-16 hover:border hover:border-[#616475] pl-3 pr-2">
                <p>London</p>
                <p>&gt;</p>
            </div>
            <div  className=" flex flex-row justify-between items-center w-[367px] h-16 hover:border hover:border-[#616475] pl-3 pr-2">
                <p>Arequipa</p>
                <p>&gt;</p>
            </div>
            <div  className=" flex flex-row justify-between items-center w-[367px] h-16 hover:border hover:border-[#616475] pl-3 pr-2">
                <p>Lima</p>
                <p>&gt;</p>
            </div>
        </div>
    </div>
  )
}