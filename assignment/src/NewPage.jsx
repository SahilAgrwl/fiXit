// SearchPage.js
import React, { useState } from 'react';
import './NewPage.css'

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/search?query=${searchTerm}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setSearchResults(data.results);
      setError(null);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setSearchResults([]);
      setError('Error fetching search results');
    }
  };

  return (
    
       <div>
         <div id='brand'>
        <h2>fiXit</h2>
        <h2>GET ANSWER IN 100 WORDS!</h2>
         </div>
    
      <div id='back'>
      <div id='search'>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter Your Question"
        />

        <div id='button'>
        <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      </div>

      <div id='ans'>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        ) : (
          <p>{error || 'No results found.'}</p>
        )}
      </div>
      </div>
  );
};

export default SearchPage;
