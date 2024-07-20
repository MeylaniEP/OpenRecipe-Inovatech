import React, { useState, useEffect } from "react";
import searchVideo from "../api/searchVideo";
import getVideoTrends from "../api/getVideoTrends";
import { FaPlay } from "react-icons/fa";
import Loading from "../components/Loading";
import { BsSearch } from "react-icons/bs";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import CountryDropdown from "../components/CountryDropdown";

function SearchPage() {
  const [keyword, setKeyword] = useState("");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchTrendingVideos = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getVideoTrends();
        if (response && response.data) {
          setVideos(response.data);
        } else if (Array.isArray(response)) {
          setVideos(response);
        } else {
          setError("Unexpected response format");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingVideos();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await searchVideo(keyword);
      if (response && response.data) {
        setVideos(response.data);
      } else if (Array.isArray(response)) {
        setVideos(response);
      } else {
        setError("Unexpected response format");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVideoClick = (videoLink) => {
    const videoIdMatch = videoLink?.match(
      /(?:embed\/|watch\?v=|\.be\/)([^&?]+)/
    );
    const videoId = videoIdMatch ? videoIdMatch[1] : null;
    if (videoId) {
      navigate(`/video-player/${videoId}`);
    } else {
      console.error("Invalid video link:", videoLink);
    }
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector(".overlay").style.opacity = "1";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector(".overlay").style.opacity = "0";
  };

  const isLargeScreen = windowWidth > 768;

  const videoContainerStyle = {
    position: "relative",
    flex: "1 1 200px",
    minWidth: isLargeScreen ? "200px" : "350px",
    maxWidth: isLargeScreen ? "150px" : "200px",
    margin: "0.5rem",
    cursor: "pointer",
  };

  const videoThumbnailStyle = {
    borderRadius: "1em",
  };

  const overlayStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: "0",
    transition: "opacity 0.3s",
    borderRadius: "1em",
  };

  const titleStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: "200px",
  };

  const fontSize =
    windowWidth > 768 ? "calc(0.8vw + 0.2em)" : "calc(0.8vw + 0.6em)";

  return (
    <div className="container mt-4">
      <div className="d-flex flex-row gap-2 align-items-center mb-3">
        <IoMdArrowBack
          onClick={() => navigate("/")}
          className="fs-2"
          style={{ cursor: "pointer" }}
        />
        <h1>Search Videos</h1>
      </div>
      <div>
        <div className="input-group mb-3 gap-3">
          <input
            type="text"
            className="form-control"
            style={{
              borderRadius: "20px",
              border: "rgba(42, 122, 178, 1) solid 1.5px",
            }}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search .."
          />
          <button
            className="btn"
            style={{
              borderRadius: "100%",
              border: "rgba(42, 122, 178, 1) solid 1px",
              height: "55px",
              width: "55px",
              background: "rgba(42, 122, 178, 1)",
            }}
            onClick={handleSearch}
            disabled={loading}
          >
            <BsSearch className="fs-3 fw-bold text-light" />
          </button>
        </div>
        <div style={{width:"150px"}} className="mb-4">
          <CountryDropdown />
        </div>
      </div>
      <div></div>

      {loading && <Loading />}
      {error && <p className="text-danger">Error: {error}</p>}
      {Array.isArray(videos) && videos.length > 0 ? (
        <div className="d-flex flex-row justify-content-start flex-wrap">
          {videos?.map((video) => {
            const videoIdMatch = video.videoLink?.match(
              /(?:embed\/|watch\?v=|\.be\/)([^&?]+)/
            );
            const videoId = videoIdMatch ? videoIdMatch[1] : null;

            return (
              <div key={video.videoId} className="d-flex flex-row flex-wrap">
                <div onClick={() => handleVideoClick(video.videoLink)}>
                  <div
                    className="video-container"
                    style={videoContainerStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div style={{ width: "100%" }}>
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
                      <FaPlay style={{ color: "rgba(42, 122, 178, 1)" }} />
                    </div>
                  </div>
                  <div className="mx-2">
                    <p className="m-0 p-0" style={titleStyle}>
                      {video.videoName}
                    </p>
                    <p style={{ fontSize, color: "grey" }}>
                      {formatViewCount(Number(video.viewCount))} views
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <>Tidak ada banh!</>
      )}
    </div>
  );
}

const formatViewCount = (viewCount) => {
  if (viewCount >= 1000000) {
    return (viewCount / 1000000).toFixed(1) + "M";
  } else if (viewCount >= 1000) {
    return (viewCount / 1000).toFixed(1) + "K";
  }
  return viewCount.toString();
};

export default SearchPage;
