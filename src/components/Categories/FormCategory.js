import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  addCategory,
  updateCategory,
} from '../../redux/actions/categoryActions';

const FormCategory = (props) => {
  const {
    addCategory,
    updateCategory,
    categoryData: { category },
  } = props;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (category.id || category.id === 0) {
      setName(category.name);
      setDescription(category.description);
    }
  }, [category]);

  const onSubmit = () => {
    if (name !== '') {
      if (category.id || category.id === 0) {
        updateCategory({ id: category.id, name, description });
      } else {
        addCategory({ name, description });
      }
      setName('');
      setDescription('');
    } else {
      alert('Bạn không thể để trống ô Name!!!');
    }
  };

  return (
    <div className="col-xl-4 col-md-6">
      <h3>Add new cateogory</h3>
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
        <textarea
          className="form-control"
          rows="3"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        ></textarea>
      </div>
      <button onClick={() => onSubmit()} className="btn btn-primary">
        Submit
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categoryData: state.categoryData,
  };
};

const mapDispatchToProps = {
  addCategory,
  updateCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormCategory);
