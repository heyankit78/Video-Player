import { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/config';
import YoutubeVideoCard from './YoutubeVideoCard';
import { Link } from 'react-router-dom';

const Videocontainer = ({searchVideoDetails}) => {
  // const location = useLocation();
  // const searchVideoDetails = location.state;
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
  console.log("searchVideoDetails-----",searchVideoDetails);
  const videosToDisplay = Array.isArray(searchVideoDetails) && searchVideoDetails.length > 0
  ? searchVideoDetails
  : videoDetails;

 
  
  return (
    <div className='flex p-2 m-2 flex-wrap'>
      {searchVideoDetails.length ? (
        videosToDisplay.map((video) => (
          <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
            <YoutubeVideoCard videoInfo={video} />
          </Link>
        ))
      ) : (
        videosToDisplay.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <YoutubeVideoCard videoInfo={video} />
          </Link>
        ))
      )}

     
    </div>
  );
};

export default Videocontainer;
