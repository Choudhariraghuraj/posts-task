import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { editPost } from '../redux/slices/postSlice';

const EditForm: React.FC = () => {
  const selectedPost = useSelector((state: RootState) => state.post.selectedPost);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(selectedPost?.title || '');

  const handleEdit = () => {
    if (selectedPost) {
      dispatch(editPost({ ...selectedPost, title }));
    }
  };

  return (
    selectedPost && (
      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={handleEdit}>Save</button>
      </div>
    )
  );
};

export default EditForm;
