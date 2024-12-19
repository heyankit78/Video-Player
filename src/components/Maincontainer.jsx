import React from 'react'
import Buttonlist from './Buttonlist'
import Videocontainer from './Videocontainer'
import { useLocation } from 'react-router-dom';

const Maincontainer = () => {
  const location = useLocation();
  const searchVideoDetails  = location.state || {};
  // console.log("searchVideoDetails from main container--------------",searchVideoDetails);
  return (
    <div>
      <Buttonlist/>
      <Videocontainer searchVideoDetails={searchVideoDetails}/>
    </div>
  )
}

export default Maincontainer
