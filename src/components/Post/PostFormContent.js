import React, { useRef, useState, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { connect } from 'react-redux';
import { addPost, updatePost, getPost } from '../../redux/actions/postActions';
import { useParams } from 'react-router';

const PostFormContent = (props) => {
  const {
    postData: { post },
    addPost,
    updatePost,
    getPost,
    categoryData: { categories },
  } = props;

  const { id } = useParams();
  const editor = useRef(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [listCat, setListCat] = useState([]);

  useEffect(() => {
    if (id) {
      getPost(id);
    }
    if (post.name) {
      setName(post.name);
      setDescription(post.description);
      setListCat(post.categories);
    }
  }, [id, getPost, post]);

  const onSubmit = () => {
    if (name !== '') {
      if (post.id || post.id === 0) {
        updatePost({ id: post.id, name, description, categories: listCat });
      } else {
        addPost({ name, description, categories: listCat });
      }
      setName('');
      setDescription('');
    } else {
      alert('Bạn không thể để trống ô Name!!!');
    }
  };

  const setHandleCheckBox = (category) => {
    const index = listCat.findIndex((item) => item === category.id);
    if (index !== -1) {
      if (listCat.length > 1) {
        var arr = listCat.splice(index);
        setListCat(arr);
      } else {
        setListCat([]);
      }
    } else {
      setListCat([...listCat, category.id]);
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
            onChange={(newContent) => {}}
          />
        </div>
      </div>
      <div className="col-xl-4 col-md-4">
        <div className="form-group">
          <label>Categories</label>
          {categories &&
            categories.map((category) => {
              const index = listCat.findIndex((item) => item === category.id);
              if (index !== -1) {
                return (
                  <label key={category.id} className="form-control">
                    <input
                      type="checkbox"
                      value={category}
                      defaultChecked={true}
                      onClick={() => setHandleCheckBox(category)}
                    />{' '}
                    <span>{category.name} co</span>
                  </label>
                );
              } else {
                return (
                  <label key={category.id} className="form-control">
                    <input
                      type="checkbox"
                      value={category}
                      defaultChecked={false}
                      onClick={() => setHandleCheckBox(category)}
                    />{' '}
                    <span>{category.name} khong</span>
                  </label>
                );
              }
            })}
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
