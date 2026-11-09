import React from 'react';
import { ChevronDown } from 'lucide-react';
import './SearchBar.css';

export default function SearchBar() {
  return (
    <div className="search-section-container">
      <div className="search-bar-wrapper">
        
        {/* Input Field */}
        <div className="search-input-box">
          <input 
            type="text" 
            placeholder="Search location, property type..." 
            className="search-input"
          />
        </div>

        {/* Dropdown Filter */}
        <div className="search-dropdown-box">
          <select className="search-select">
            <option value="all">All</option>
            <option value="buy">For Buy</option>
            <option value="rent">For Rent</option>
          </select>
          <ChevronDown className="dropdown-icon" size={18} />
        </div>

        {/* Search Button */}
        <button className="search-btn">
          Search
        </button>

      </div>
    </div>
  );
}