import { useState } from "react";
import "./style.css"

const Search = (props) => {

    const { getDataFromSearchComponent } = props

    const [inputValue, setInputValue] = useState("");

    const handleInputValue = e => {
        const { value } = e.target;
        setInputValue(value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        getDataFromSearchComponent(inputValue);
    }

    return (
        <div className="search">
            <form className="search" onSubmit={handleSubmit}>
                <input className="inputBox" onChange={handleInputValue}  value={inputValue} placeholder="Enter Anime" />
                <button className="searchbtn"> search </button>
            </form>
        </div>
    )
}

export default Search;