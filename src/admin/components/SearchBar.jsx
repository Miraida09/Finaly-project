import React from 'react';
import '../styles/form.css';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="form-input"
      />
    </div>
  );
};

export default SearchBar;
