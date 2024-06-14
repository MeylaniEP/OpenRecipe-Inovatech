import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import getVideoTrends from "../api/getVideoTrends";
import { IoMdArrowBack } from "react-icons/io";

function VideoPlayer() {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await getVideoTrends();
        if (response && Array.isArray(response.data)) {
          const video = response.data.find((v) => {
            const videoIdMatch = v.videoLink?.match(/embed\/([^?]+)/);
            return videoIdMatch && videoIdMatch[1] === videoId;
          });
          setVideoDetails(video);
        } else {
          console.error("API response is not in expected format", response);
        }
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };
    fetchVideoDetails();
  }, [videoId]);

  if (!videoDetails) {
    return <div>Loading...</div>;
  }

  const formatViewCount = (viewCount) => {
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(1) + "M";
    } else if (viewCount >= 1000) {
      return (viewCount / 1000).toFixed(1) + "K";
    }
    return viewCount.toString();
  };
//
  return (
    <div className=" mt-3">
      <div className="d-flex flex-row gap-3 align-items-start mx-5" style={{cursor:"pointer"}}>
        <div className="d-flex flex-row" style={{height:"100%"}}>
          <IoMdArrowBack className="fs-2" onClick={() => navigate(-1)} />
        </div>
        <div className="d-flex flex-column">
          <h4>{videoDetails.videoName}</h4>
          <p>{formatViewCount(Number(videoDetails.viewCount))} ditonton</p>
        </div>
      </div>
      <div className="embed-responsive embed-responsive-16by9 mb-3" >
        <iframe
        style={{width:"100vw", height:"80vh"}}
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
          title="Video Player"
        ></iframe>
      </div>
    </div>
  );
}

export default VideoPlayer;
