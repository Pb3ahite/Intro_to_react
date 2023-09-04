import React from 'react';


const Feed = () => {
    const posts = [
      { id: 1, text: 'This is the first post', timestamp: '2 hours ago' },
      { id: 2, text: 'Another post here', timestamp: '1 day ago' },
      // Add more posts as needed
    ];
  
    return (
      <div className="feed">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  };
  