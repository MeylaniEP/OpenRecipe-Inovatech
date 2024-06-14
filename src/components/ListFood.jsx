// import React, { useEffect, useState } from "react";
// import getVideoTrends from "../api/getVideoTrends";

// function ListFood() {
//   const [videoTrends, setVideoTrends] = useState([]);

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

//   return (
//     <div className="d-flex flex-row flex-wrap justify-content-start">
//       {Array.isArray(videoTrends) && videoTrends.length > 0 ? (
//         videoTrends.map((video) => {
//           const videoIdMatch = video.videoLink?.match(/embed\/([^?]+)/);
//           const videoId = videoIdMatch ? videoIdMatch[1] : null;

//           return (
//             <div key={video.videoId} className="d-flex flex-column m-2" style={{ flex: '1 1 200px', minWidth: '200px', maxWidth: "150px" }}>
//               <div style={{ width: '100%' }}>
//                 {videoId ? (
//                   <img
//                     className="img-fluid border"
//                     style={{ borderRadius: "1em" }}
//                     src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
//                     alt={video.videoName}
//                   />
//                 ) : (
//                   <p>Invalid video link</p>
//                 )}
//               </div>
//               <p className="m-0 p-0" style={{ fontSize: 'calc(1vw + 0.35em)' }}>{video.videoName}</p>
//               <p style={{ fontSize: 'calc(0.8vw + 0.2em)', color: 'grey' }}>{video.viewCount}x ditonton</p>
//             </div>
//           );
//         })
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default ListFood;
import React, { useEffect, useState } from "react";
import getVideoTrends from "../api/getVideoTrends";

function ListFood() {
  const [videoTrends, setVideoTrends] = useState([]);

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

  const formatViewCount = (viewCount) => {
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(1) + 'M';
    } else if (viewCount >= 1000) {
      return (viewCount / 1000).toFixed(1) + 'K';
    }
    return viewCount.toString();
  };

  return (
    <div className="d-flex flex-row flex-wrap justify-content-start">
      {Array.isArray(videoTrends) && videoTrends.length > 0 ? (
        videoTrends.map((video) => {
          const videoIdMatch = video.videoLink?.match(/embed\/([^?]+)/);
          const videoId = videoIdMatch ? videoIdMatch[1] : null;

          return (
            <div key={video.videoId} className="d-flex flex-column m-2" style={{ flex: '1 1 200px', minWidth: '200px', maxWidth: "150px" }}>
              <div style={{ width: '100%' }}>
                {videoId ? (
                  <img
                    className="img-fluid border"
                    style={{ borderRadius: "1em" }}
                    src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                    alt={video.videoName}
                  />
                ) : (
                  <p>Invalid video link</p>
                )}
              </div>
              <p className="m-0 p-0" style={{ fontSize: 'calc(1vw + 0.35em)' }}>{video.videoName}</p>
              <p style={{ fontSize: 'calc(0.8vw + 0.2em)', color: 'grey' }}>{formatViewCount(Number(video.viewCount))} views</p>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ListFood;
