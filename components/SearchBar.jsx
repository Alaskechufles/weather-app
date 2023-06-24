import SearchIcon from "@/public/SearchIcon";
import XIcon from "@/public/XIcon";

export default function SearchBar() {
  return (
    <div>
        <div>
            <XIcon/>
        </div>
        <div>
            <div>
                <div>    
                    <SearchIcon/>
                </div>
                <input type="text" />
            </div>
            <button>Search</button>
        </div>
        <div>
            <div>
                <p>London</p>
                <p>&gt;</p>
            </div>
        </div>
    </div>
  )
}