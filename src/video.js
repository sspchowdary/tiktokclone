 import React from 'react';
 import "./video.css";
 import {useRef, useState} from 'react';
 import VideoFooter from "./VideoFooter.js";

 function Video() {
   const [playing, setplaying]=useState(false);
   const videoRef=useRef(null);
   const onVideoPress=()=> {
     if(playing){
       videoRef.current.pause();
       setplaying(false);
     }else{
      videoRef.current.play();
      setplaying(true);
     }
    };
      return (
        <div className="video">
          <video className='video_player' 
          loop
          onClick={onVideoPress}
          ref={videoRef}
          src=""></video>
          <VideoFooter />
          {/*<VideoFooter/>}
          {/*<videoSidebar /> */}
        </div>
      );
 }

 export default Video;