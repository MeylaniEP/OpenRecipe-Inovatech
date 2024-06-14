// // src/pages/SearchPage.jsx
// import React, { useState } from 'react';
// import getVideoTrends from '../api/getVideoTrends';

// function SearchPage() {
//   const [keyword, setKeyword] = useState('');
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSearch = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const data = await getVideoTrends(keyword);
//       setVideos(data.videos);  // Pastikan struktur data sesuai dengan API response
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Search Videos</h1>
//       <input 
//         type="text" 
//         value={keyword} 
//         onChange={(e) => setKeyword(e.target.value)} 
//         placeholder="Enter keyword" 
//       />
//       <button onClick={handleSearch}>Search</button>

//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       {videos.length > 0 && (
//         <div>
//           {videos.map((video) => (
//             <div key={video.id}>
//               <h2>{video.title}</h2>
//               <p>{video.description}</p>
//               <a href={video.url}>Watch Video</a>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default SearchPage;
import React, { useState } from 'react';
import getVideoTrends from '../api/getVideoTrends';

function SearchPage() {
  const [keyword, setKeyword] = useState('');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getVideoTrends(keyword);
      setVideos(data); // Menyimpan data video ke dalam state 'videos'
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Search Videos</h1>
      <input 
        type="text" 
        value={keyword} 
        onChange={(e) => setKeyword(e.target.value)} 
        placeholder="Enter keyword" 
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {videos.length > 0 && (
        <div>
          {videos.map((video) => (
            <div key={video.videoId}>
              <h2>{video.videoName}</h2>
              <p>Country: {video.country}</p>
              <p>Category: {video.category}</p>
              <p>Views: {video.viewCount}</p>
              <a href={video.videoLink}>Watch Video</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
