import React from 'react';

function formatViewCount(views) {
  if (views >= 1_000_000) {
    return (views / 1_000_000).toFixed(1) + "M";
  } else if (views >= 1_000) {
    return Math.floor(views / 1_000) + "K";
  } else {
    return views.toString(); // Return as-is for smaller numbers
  }
}

function timeAgo(publishedAt) {
  const now = new Date();
  const publishedDate = new Date(publishedAt);
  const diffInSeconds = Math.floor((now - publishedDate) / 1000);

  const secondsInMinute = 60;
  const secondsInHour = 60 * 60;
  const secondsInDay = 60 * 60 * 24;
  const secondsInMonth = 60 * 60 * 24 * 30;
  const secondsInYear = 60 * 60 * 24 * 365;

  if (diffInSeconds < secondsInMinute) {
    return `${diffInSeconds} second${diffInSeconds !== 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < secondsInHour) {
    const minutes = Math.floor(diffInSeconds / secondsInMinute);
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < secondsInDay) {
    const hours = Math.floor(diffInSeconds / secondsInHour);
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < secondsInMonth) {
    const days = Math.floor(diffInSeconds / secondsInDay);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < secondsInYear) {
    const months = Math.floor(diffInSeconds / secondsInMonth);
    return `${months} month${months !== 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffInSeconds / secondsInYear);
    return `${years} year${years !== 1 ? 's' : ''} ago`;
  }
}

function formatYouTubeDuration(duration) {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  const hours = match[1] ? parseInt(match[1].replace("H", ""), 10) : 0;
  const minutes = match[2] ? parseInt(match[2].replace("M", ""), 10) : 0;
  const seconds = match[3] ? parseInt(match[3].replace("S", ""), 10) : 0;

  // Format as H:MM:SS or MM:SS
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  } else {
    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  }
}

const YoutubeVideoCard = ({ videoInfo }) => {
  const { snippet, statistics, contentDetails } = videoInfo;
  const { channelTitle, title, thumbnails } = snippet;

  // Optional chaining to ensure missing fields don't cause errors
  const views = statistics?.viewCount;
  const duration = contentDetails?.duration;
  const publishedAt = snippet?.publishedAt;

  return (
    <div className='m-2 p-2 w-72 bg-white rounded-lg'>
      {/* Image and Video Duration */}
      <div className="relative">
        <img alt="thumbnail" className='rounded-lg w-full' src={thumbnails?.medium?.url} />
        <div className='absolute right-2 top-2 bg-black text-white text-xs px-2 rounded-md'>
          {duration ? formatYouTubeDuration(duration) : "N/A"}
        </div>
      </div>

      {/* Title */}
      <div className='font-bold text-sm line-clamp-2'>{title}</div>

      {/* Channel Title */}
      <div className='text-gray-500 text-sm'>{channelTitle}</div>

      {/* Views and Time Ago */}
      <div className='flex items-center text-sm text-gray-600 mt-2'>
        {/* Views */}
        <div>{views ? formatViewCount(views) : "N/A"} views</div>

        {/* Dot Separator */}
        <div className='mx-2'>•</div>

        {/* Time Ago */}
        <div>{publishedAt ? timeAgo(publishedAt) : "Unknown"}</div>
      </div>
    </div>
  );
}

export default YoutubeVideoCard;
