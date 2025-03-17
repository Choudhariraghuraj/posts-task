import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { selectPost } from '../redux/slices/postSlice';

const PostList: React.FC = () => {
  const posts = useSelector((state: RootState) => state.post.posts);
  const dispatch = useDispatch();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} onClick={() => dispatch(selectPost(post))}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
