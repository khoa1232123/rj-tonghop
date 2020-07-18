import React, { useRef, useState, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { connect } from 'react-redux';
import { addPost, updatePost, getPost } from '../../redux/actions/postActions';
import { useParams } from 'react-router';

const PostFormContent = (props) => {
  const {
    postData,
    postData: { post },
    addPost,
    updatePost,
    getPost,
  } = props;

  const { id } = useParams();
  const editor = useRef(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (id) {
      getPost(id);
    }
    if (post.name) {
      console.log(post);
      setName(post.name);
      setDescription(post.description);
    }
  }, [id, getPost, post]);

  console.log(postData);

  const onSubmit = () => {
    if (name !== '') {
      if (post.id || post.id === 0) {
        updatePost({ id: post.id, name, description });
      } else {
        addPost({ name, description });
      }
      setName('');
      setDescription('');
    } else {
      alert('Bạn không thể để trống ô Name!!!');
    }
  };

  return (
    <div className="row">
      <div className="col-xl-8 col-md-8">
        <h3>Add new post</h3>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <JoditEditor
            ref={editor}
            value={description}
            tabIndex={1}
            onBlur={(newContent) => setDescription(newContent)}
          />
        </div>
      </div>
      <div className="col-xl-4 col-md-4">
        <div className="form-group">
          <label>
            <input type="checkbox" /> <span>Hello</span>
          </label>
        </div>
        <div className="form-group">
          <button onClick={() => onSubmit()} className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categoryData: state.categoryData,
    postData: state.postData,
  };
};

const mapDispatchToProps = {
  addPost,
  updatePost,
  getPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostFormContent);
