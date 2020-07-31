import React from 'react';
import PostTable from '../../components/Admin/Post/PostTable';
import { Link } from 'react-router-dom';

const Post = () => {
  return (
    <div>
      <h1>Post</h1>
      <div className="row">
        <div className="col-12 mb-2">
          <Link className="btn btn-primary" to="/post/add">
            Add Post
          </Link>
        </div>
        <PostTable />
      </div>
    </div>
  );
};

export default Post;
