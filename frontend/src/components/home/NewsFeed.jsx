


import { useEffect, useState } from "react";
import axios from "axios";
import Masonry from 'react-masonry-css';
import SideContent from "./SideContent";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [hoveredPost, setHoveredPost] = useState(null);
  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data } = await axios.get(`${SERVER_URL}/insta-post`);
        setPosts(data.posts);
        setFilterData(data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, []);

  const filterHandler = (event) => {
    const filterValue = event.target.value;
    const filtered = posts.filter(post =>
      post.caption.toLowerCase().includes(filterValue.toLowerCase()) ||
      post.location.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilterData(filtered);
  };

  const handleSave = (post) => {
    setSavedPosts([...savedPosts, post]);
    alert("Post saved successfully!");
  };

  const handleDelete = (post) => {
    const updatedPosts = filterData.filter(p => p._id !== post._id);
    setFilterData(updatedPosts);
    setPosts(posts.filter(p => p._id !== post._id));
    alert("Post deleted successfully!");
  };

  const handleEdit = (post) => {
    console.log("Edit post:", post);
  };

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input
        style={{
          width: '80%',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '10px',
          marginBottom: '20px'
        }}
        placeholder="Search"
        onChange={filterHandler}
      />
      <Masonry
        breakpointCols={{
          default: 6,
          1100: 4,
          700: 2,
          500: 1
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        style={{ display: 'flex', width: '100%', marginLeft: '-15px' }}
      >
        {filterData.length > 0 ? filterData.map((post, i) => (
          <div
            key={i}
            style={{
              position: 'relative',
              marginBottom: '15px',
              paddingLeft: '15px',
              breakInside: 'avoid',
              borderRadius: '12px',
              overflow: 'hidden'
            }}
            onMouseEnter={() => setHoveredPost(i)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            <img
              src={post.imgUrl}
              alt="postImage"
              style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block', borderRadius: '12px' }}
            />
            {hoveredPost === i && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: 'white',
                padding: '10px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-end'
                }}>
                  <button className="rounded-full" onClick={() => handleSave(post)} style={buttonStyle('black')}>Save</button>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '10px'
                }}>
                  <button onClick={() => handleEdit(post)} style={buttonStyle('black')}>Edit</button>
                  <button onClick={() => handleDelete(post)} style={buttonStyle('red')}>Delete</button>
                </div>
              </div>
            )}
          </div>
        )) : <div>No posts available</div>}
      </Masonry>

      <SideContent />
    </div>
  );
};

const buttonStyle = (color) => ({
  padding: '8px 16px',
  borderRadius: '5px',
  backgroundColor: color,
  border: 'none',
  cursor: 'pointer',
  color: 'white',
  fontSize: '12px',
  opacity: 0.8,
  transition: 'opacity 0.3s',
  margin: '3px',
});

export default NewsFeed;
