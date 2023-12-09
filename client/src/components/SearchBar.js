import { useState } from "react";
import "./../styles/search-bar.css";
export default function SearchBar(props) {

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="search-bar">
            <input type="search" name="search" id="search" placeholder="Tìm kiếm"
                value={searchTerm} 
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    props.handleSearch(e.target.value.toLowerCase());
                }}/>
        </div>
    )
}