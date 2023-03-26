import React from 'react';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { Post } from '../lib/types';
import { selectMyPosts } from '../store/myPostsSlice';

const MyPage: NextPage = () => {
  const myPosts = useSelector((state: RootState) => selectMyPosts(state));

  return (
    <div>
      <h1>My Page</h1>
      <p>User Info: Name, Email, etc.</p>
      <ul>
        {myPosts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyPage;
