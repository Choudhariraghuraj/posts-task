import React from 'react';
import SearchBar from '../components/SearchBar';
import PostList from '../components/PostList';
import EditForm from '../components/EditForm';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Post Management</h1>
      <SearchBar />
      <PostList />
      <EditForm />
    </div>
  );
};

export default Home;
