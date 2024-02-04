import React, { useState } from 'react';
import './search.css';
import { IoCloseSharp } from "react-icons/io5";
const search = ({ search, setSearch, value, setValue, basket, setBasket }) => {
    const onsubmit = (e) => {
        e.preventDefaul()
    }
    const handlechange = (e) => {
        if (e.target.value.trim() !== "") {
            setValue(e.target.value)
        }
        else {
            setValue('')
        }
    }

    return (
        <div className='search-section'>
            <div className="search-section-items">
                <div className="search-item">
                    <span>Write something here</span>
                    <IoCloseSharp fontSize={'2.5rem'} onClick={() => setSearch(false)} />
                </div>
                <input type="text" onSubmit={onsubmit} onChange={handlechange} placeholder='Search' />
            </div>
        </div>
    )
}
 
export default search