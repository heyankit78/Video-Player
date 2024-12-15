import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
// import { YOUTUBE_SEARCH_API } from '../utils/config';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
const dispatch = useDispatch();
const [searchTextQuery,setSearchTextQuery] = useState("");
const [suggestionArray,setSuggestionArray] = useState([]);
const [showSuggestion,setShowSuggestion] = useState(false);

const searchCache = useSelector((store)=>store.search)
function toggleSidebar(){
    dispatch(toggleMenu());
}
useEffect(()=>{

    const timer = setTimeout(()=>{
        if(searchCache[searchTextQuery]){
            setSuggestionArray(searchCache[searchTextQuery]);
        }else{
            showSuggestionQuery();
        }
    },200)

    return () =>{
        clearInterval(timer);
    }
},[searchTextQuery])
function showSuggestionQuery(){
    {console.log("API CALL---",searchTextQuery)}
    const corsProxy = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchTextQuery}`;
    
    fetch(corsProxy + apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setSuggestionArray(data[1]);
        dispatch(cacheResults({
            [searchTextQuery] : data[1]
        }))
      })
      .catch((error) => {
        console.error("Error:", error);
      });
}
  return (
    <div className='grid grid-flow-col p-5 shadow-lg'>
        <div className='flex col-span-1'>
            <img onClick={toggleSidebar} className='h-8 cursor-pointer' alt="hamburger-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"/>
            <img className='h-8 mx-2 cursor-pointer' alt="youtube-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"/>
        </div>
        <div className='col-span-10 px-10'>
           <div className='flex items-center'>
  <input 
    className='w-1/2 rounded-l-full border border-gray-400 p-2' 
    placeholder="Search.." 
    value={searchTextQuery} 
    onChange={(e) => setSearchTextQuery(e.target.value)} 
    onFocus={()=>setShowSuggestion(true)}
    onBlur={()=>setShowSuggestion(false)}
    type="text"
  />
  <button className='rounded-r-full border bg-slate-300 border-gray-400 py-[7px] px-2 flex items-center justify-center'>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="currentColor" 
      height="24" 
      viewBox="0 0 24 24" 
      width="24" 
      focusable="false" 
      aria-hidden="true" 
      style={{ pointerEvents: 'none', width: '24px', height: '24px' }}
    >
      <path clipRule="evenodd" d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z" fillRule="evenodd"></path>
    </svg>
  </button>
</div>

            {showSuggestion && searchTextQuery && (
            <div className='w-[44rem] z-30 absolute bg-white overflow-auto border border-gray-300 rounded-md mt-2 shadow-lg'>
                {suggestionArray.map((suggestedElement, index) => (
                <div key={index} className='flex items-center p-[5px] font-bold border-b border-gray-200 hover:bg-gray-100 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '24px', height: '24px' }}>
                    <path clipRule="evenodd" d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z" fillRule="evenodd"></path>
                    </svg>
                    <span className="ml-2">{suggestedElement}</span>
                </div>
                ))}
            </div>
            )}
            
        </div>
        <div className='col-span-1'>
            <img className='h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"/>
        </div>
    
    </div>
  )
}

export default Header
