import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../../redux/actions/postActions';
import { Link } from 'react-router-dom';

const PostTable = (props) => {
  const {
    postData: { posts },
    deletePost,
  } = props;
  return (
    <div className="col-xl-12 col-md-12">
      <div className="table-responsive">
        <table
          className="table table-bordered"
          id="dataTable"
          width="100%"
          cellSpacing="0"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </tfoot>
          <tbody>
            {posts &&
              posts.map((post, index) => {
                return (
                  <tr key={`key-${index}`}>
                    <td width="25%">{post.name}</td>
                    <td width="25%">{post.categories && post.categories.map(item => `${item}, `)}</td>
                    <td
                      width="40%"
                      dangerouslySetInnerHTML={{
                        __html: post.description,
                      }}
                    />
                    <td width="10%">
                      <Link
                        to={`/post/${post.id}`}
                        className="btn btn-warning btn-sm"
                      >
                        Edit
                      </Link>{' '}
                      <button
                        onClick={() => deletePost(post.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    postData: state.postData,
  };
};

const mapDispatchToProps = {
  deletePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostTable);
