// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import getVideoTrends from "../api/getVideoTrends";
// import FoodVariant from "./FoodVariant";
// import { FaPlay } from "react-icons/fa";

// function ListFoodVarian() {
//   const [videoTrends, setVideoTrends] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("Main Course");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getVideoTrends();
//         if (response && Array.isArray(response.data)) {
//           setVideoTrends(response.data);
//         } else {
//           console.error("API response is not in expected format", response);
//         }
//       } catch (error) {
//         console.error("Error fetching video trends:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleSetCategory = (category) => {
//     setSelectedCategory(category);
//   };

//   const filteredVideos = videoTrends.filter(
//     (video) =>
//       video.category &&
//       video.category.trim().toLowerCase() === selectedCategory.toLowerCase()
//   );

//   const handleVideoClick = (videoId) => {
//     navigate(`/video-player/${videoId}`);
//   };

//   const videoContainerStyle = {
//     position: "relative",
//     flex: "1 1 200px",
//     minWidth: "200px",
//     maxWidth: "150px",
//     margin: "0.5rem",
//     cursor: "pointer",
//   };

//   const videoThumbnailStyle = {
//     borderRadius: "1em",
//   };

//   const overlayStyle = {
//     position: "absolute",
//     top: "0",
//     left: "0",
//     width: "100%",
//     height: "100%",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     opacity: "0",
//     transition: "opacity 0.3s",
//     borderRadius: "1em",
//   };

//   const handleMouseEnter = (e) => {
//     e.currentTarget.querySelector(".overlay").style.opacity = "1";
//   };

//   const handleMouseLeave = (e) => {
//     e.currentTarget.querySelector(".overlay").style.opacity = "0";
//   };

//   const titleStyle = {
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//     whiteSpace: "nowrap",
//     maxWidth: "200px",
//   };

//   return (
//     <div>
//       <FoodVariant setCategory={handleSetCategory} />
//       <div className="d-flex flex-row justify-content-start flex-wrap">
//         {filteredVideos.length > 0 ? (
//           filteredVideos.map((video) => {
//             const videoIdMatch = video.videoLink?.match(/embed\/([^?]+)/);
//             const videoId = videoIdMatch ? videoIdMatch[1] : null;

//             return (
//               <div key={video.videoId} className="d-flex flex-row flex-wrap">
//                 <div onClick={() => handleVideoClick(videoId)}>
//                   <div
//                     className="video-container"
//                     style={videoContainerStyle}
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     <div style={{ width: "100%" }}>
//                       {videoId ? (
//                         <img
//                           className="img-fluid border"
//                           style={videoThumbnailStyle}
//                           src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
//                           alt={video.videoName}
//                         />
//                       ) : (
//                         <p>Invalid video link</p>
//                       )}
//                     </div>
//                     <div className="overlay" style={overlayStyle}>
//                       <FaPlay style={{ color: "rgba(42, 122, 178, 1)" }} />
//                     </div>
//                   </div>
//                   <div className="mx-2">
//                     <p className="m-0 p-0" style={titleStyle}>
//                       {video.videoName}
//                     </p>
//                     <p
//                       style={{ fontSize: "calc(0.8vw + 0.2em)", color: "grey" }}
//                     >
//                       {formatViewCount(Number(video.viewCount))} views
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <p>No videos available for the selected category</p>
//         )}
//       </div>
//     </div>
//   );
// }

// const formatViewCount = (viewCount) => {
//   if (viewCount >= 1000000) {
//     return (viewCount / 1000000).toFixed(1) + "M";
//   } else if (viewCount >= 1000) {
//     return (viewCount / 1000).toFixed(1) + "K";
//   }
//   return viewCount.toString();
// };

// export default ListFoodVarian;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getVideoTrends from "../api/getVideoTrends";
import FoodVariant from "./FoodVariant";
import { FaPlay } from "react-icons/fa";

function ListFoodVarian() {
  const [videoTrends, setVideoTrends] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Main Course");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getVideoTrends();
        if (response && Array.isArray(response.data)) {
          setVideoTrends(response.data);
        } else {
          console.error("API response is not in expected format", response);
        }
      } catch (error) {
        console.error("Error fetching video trends:", error);
      }
    };
    fetchData();
  }, []);

  const handleSetCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredVideos = videoTrends.filter(
    (video) =>
      video.category &&
      video.category.trim().toLowerCase() === selectedCategory.toLowerCase()
  );

  const handleVideoClick = (videoId) => {
    navigate(`/video-player/${videoId}`);
  };

  const videoContainerStyle = {
    position: "relative",
    flex: "1 1 200px",
    minWidth: "200px",
    maxWidth: "150px",
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

  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector(".overlay").style.opacity = "1";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector(".overlay").style.opacity = "0";
  };

  const titleStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: "200px",
  };

  return (
    <div>
      <FoodVariant setCategory={handleSetCategory} />
      <div className="d-flex flex-row justify-content-start flex-wrap">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => {
            const videoIdMatch = video.videoLink?.match(/embed\/([^?]+)/);
            const videoId = videoIdMatch ? videoIdMatch[1] : null;

            return (
              <div key={video.videoId} className="d-flex flex-row flex-wrap">
                <div onClick={() => handleVideoClick(videoId)}>
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
                    <p
                      style={{ fontSize: "calc(0.8vw + 0.2em)", color: "grey" }}
                    >
                      {formatViewCount(Number(video.viewCount))} views
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No videos available for the selected category</p>
        )}
      </div>
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

export default ListFoodVarian;
