// SearchPage.js
import React, { useState } from 'react';
import './NewPage.css'

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
    
 

  const handleSearch = async (e) => {

    e.preventDefault();

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
        <div id='page2'>
        <div id='header2'>
     <h2 style={{fontWeight: '900', fontSize: '30px'}}>fiXit</h2>
      </div>
      <div id='text'>
      <div id='text2'>
      <div id='text1'>
      <span>F</span>
    <span>i</span>
    <span>x</span>
    <span>&nbsp;</span> 
    <span>y</span>
    <span>o</span>
    <span>u</span>
    <span>r</span>
    <span>&nbsp;</span> 
    <span>S</span>
    <span>a</span>
    <span>l</span>
    <span>e</span>
    <span>s</span>
      </div> 
      <span> &nbsp;</span>
      <span> &nbsp;</span>
      <span> &nbsp;</span>
      <span> &nbsp;</span>   
      <span>E</span>
    <span>n</span>
    <span>a</span>
    <span>b</span>
    <span>l</span>
    <span>i</span>
    <span>n</span>
    <span>g</span>
    <span>&nbsp; </span> 
    <span>H</span>
    <span>u</span>
    <span>m</span>
    <span>a</span>
    <span>n</span>
    <span> &nbsp;</span> 
    <span>I</span>
    <span>n</span>
    <span>t</span>
    <span>e</span>
    <span>l</span>
    <span>l</span>
    <span>i</span>
    <span>g</span>
    <span>e</span>
    <span>n</span>
    <span>c</span>
    <span>e</span>
    <span>&nbsp; </span>
    <span> &nbsp;</span>
    <span> &nbsp;</span>
    <span> &nbsp;</span>
    <span> &nbsp;</span>
    <span>w</span>
    <span>i</span>
    <span>t</span>
    <span>h</span>
    <span> &nbsp;</span> 
    <span>A</span>
    <span>r</span>
    <span>t</span>
    <span>i</span>
    <span>f</span>
    <span>i</span>
    <span>c</span>
    <span>i</span>
    <span>a</span>
    <span>l</span>
    <span>&nbsp;</span>
    <span>I</span>
    <span>n</span>
    <span>t</span>
    <span>e</span>
    <span>l</span>
    <span>l</span>
    <span>i</span>
    <span>g</span>
    <span>e</span>
    <span>n</span>
    <span>c</span>
    <span>e</span>
      </div>
      </div>
    </div>
      <div style={{marginLeft:'260px', marginBottom: '360px'}}>
    <aside className="w-full lg:w-9/12 2xl:w-full h-full overflow-hidden bg-[#fbfaf9] snipcss-XTlH1">
    <div className="w-[95%] lg:w-[70%] h-full overflow-hidden mx-auto flex flex-col gap-y-6 py-6 items-center overflow-x-hidden">
        <section className="w-full hidden lg:flex items-center justify-center gap-x-4">
            <h2 className="text-main font-proximaNormal font-medium text-5xl">fiXit</h2>
        </section>
        <section className="w-full  space-y-3 false">
            <form className="w-full false">
                <div className="w-full border border-main flex items-center justify-between px-4 py-3 rounded-xl bg-white"><input placeholder="SalesGPT can help you to browse uncovered topics" className="bg-transparent border-none outline-none w-full text-main font-medium basis-[80%]" type="text" value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}/><button onClick={handleSearch} type="submit" className="bg-gray-50 p-2 rounded-full"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" fontSize="25" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <title>Search</title>
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                        </svg></button></div>
            </form>
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
        </section>
        
        <section className="w-full  h-full">
            <div className="w-full">
                <div className="w-full h-full flex items-center justify-between">
                    <div className="flex items-center gap-x-2"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" fontSize="20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"></path>
                            <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"></path>
                        </svg>
                        <h3 className="font-semibold text-lg text-main">Training Nudges</h3>
                    </div>
                    <div className="flex items-center gap-x-4"><button><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" fontSize="20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <title>Previous</title>
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                            </svg></button><button><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" fontSize="20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <title>Next</title>
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                            </svg></button></div>
                </div>
                <div data-orientation="horizontal" role="none" className="shrink-0 w-full bg-main h-[0.8px] mt-2 mb-7"></div>
                <p>No nudges to show</p>
            </div>
        </section>
    </div>
</aside>
</div>
      </div>
  );
};

export default SearchPage;
