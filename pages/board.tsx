import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer'; // 수정된 부분
import { Post } from '../lib/types';
import { selectPosts } from '../store/postsSlice'; // 수정된 부분

const BoardPage: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const posts = useSelector((state: RootState) => selectPosts(state)); // 수정된 부분
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <div>
      <h1>Board</h1>
      {posts.map((post) => (
        <div key={post.id} onClick={() => handlePostClick(post)}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
      {selectedPost && (
        <div>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.content}</p>
          <button onClick={handleCloseModal}>Close Modal</button>
        </div>
      )}
    </div>
  );
};

export default BoardPage;
