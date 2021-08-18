import React, { useState } from "react";

import { SearchBarProps } from "./SearchBar.types";

import "./SearchBar.scss";
import Button from "../Button/Button";

const SearchBar: React.FC<SearchBarProps> = (props) => {

  const [value, setValue] = useState("")
  const [active, setActive] = useState(false);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }
  return (
      <div className="SearchBarWrapper" style={{width: props.width}}>
        {props.label && <label className="searchLabel" htmlFor='male' >{props.label}</label> }
        <div className={`searchBox ${props.variant==='outline'? 'searchBoxOutline':'searchBoxBottom'}`}>
          <input  type='search'  
                  className='searchInput'
                  name="search" 
                  id='search' 
                  value={value} 
                  onChange={onChange}
                  // onClick={set}
                  placeholder={props.placeholder}
          />
          <button className='submitButton' >
            {props.buttonLabel}
          </button>
        </div>
      </div>
    )
};

export default SearchBar;

