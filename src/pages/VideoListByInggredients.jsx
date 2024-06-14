import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import getVideoByIngredients from '../api/getVideoByInggredients';
import { IoMdArrowBack } from "react-icons/io";

function VideoListByIngredients() {
  const { ingredientName } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getVideoByIngredients(ingredientName);
        setVideos(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [ingredientName]);

  const handleVideoClick = (videoId) => {
    navigate(`/video-player/${videoId}`);
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector('.overlay').style.opacity = '1';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector('.overlay').style.opacity = '0';
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching videos: {error}</div>;
  }

  if (videos.length === 0) {
    return <div>No videos available for {ingredientName}</div>;
  }

  const videoContainerStyle = {
    position: 'relative',
    flex: '1 1 200px',
    minWidth: '200px',
    maxWidth: '150px',
    margin: '0.5rem',
    cursor: 'pointer',
  };

  const videoThumbnailStyle = {
    borderRadius: '1em',
  };

  const overlayStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '0',
    transition: 'opacity 0.3s',
    borderRadius: '1em',
  };

  const titleStyle = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '200px',
  };

  return (
    <div className='m-5'>
      <div className="d-flex gap-3 align-items-center mb-4">
        <IoMdArrowBack style={{cursor:"pointer"}} className='fs-2' onClick={handleBackClick}/>
        <h1>{ingredientName} Ingredients</h1>
      </div>
      <div className="d-flex flex-row justify-content-start flex-wrap">
        {videos.map((video) => {
          const videoIdMatch = video.videoLink?.match(/embed\/([^?]+)/);
          const videoId = videoIdMatch ? videoIdMatch[1] : null;

          return (
            <div key={video.videoId} className="d-flex flex-row flex-wrap">
              <div onClick={() => handleVideoClick(video.videoId)}>
                <div
                  className="video-container"
                  style={videoContainerStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div style={{ width: '100%' }}>
                    {videoId ? (
                      <img
                        className="img-fluid border"
                        style={videoThumbnailStyle}
                        src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                        alt={video.videoName}
                      />
                    ) : (
                      <p>Invalid video link</p>
                    )}
                  </div>
                  <div className="overlay" style={overlayStyle}>
                    <FaPlay style={{ color: 'rgba(42, 122, 178, 1)' }} />
                  </div>
                </div>
                <div className="mx-2">
                  <p className="m-0 p-0" style={titleStyle}>
                    {video.videoName}
                  </p>
                  <p style={{ fontSize: 'calc(0.8vw + 0.2em)', color: 'grey' }}>
                    {formatViewCount(Number(video.viewCount))} views
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const formatViewCount = (viewCount) => {
  if (viewCount >= 1000000) {
    return (viewCount / 1000000).toFixed(1) + 'M';
  } else if (viewCount >= 1000) {
    return (viewCount / 1000).toFixed(1) + 'K';
  }
  return viewCount.toString();
};

export default VideoListByIngredients;
