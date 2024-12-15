import { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/config';
import YoutubeVideoCard from './YoutubeVideoCard';
import { Link } from 'react-router-dom';

const Videocontainer = () => {
const [videoDetails,setVideoDetails] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      console.log(jsonData);
      setVideoDetails(jsonData.items)
      
    } catch (error) {
      console.error("Failed to fetch videos:", error.message);
    }
  };

  return (
    <div className='flex p-2 m-2 flex-wrap'>
        {videoDetails.map((video)=>{
            return (
                <Link key={video.id} to={"/watch?v="+video.id}><YoutubeVideoCard videoInfo={video}/></Link>
               
            )
        })}
      
    </div>
  );
};

export default Videocontainer;
