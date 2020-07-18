import React from 'react';
import { connect } from 'react-redux';
import {
  getCategory,
  deleteCategory,
} from '../../redux/actions/categoryActions';

const TableCategory = (props) => {
  const {
    categoryData: { categories },
    getCategory,
    deleteCategory,
  } = props;
  return (
    <div className="col-xl-8 col-md-6">
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
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </tfoot>
          <tbody>
            {categories &&
              categories.map((category, index) => {
                return (
                  <tr key={`key-${index}`}>
                    <td width="30%">{category.name}</td>
                    <td width="50%">{category.description}</td>
                    <td width="20%">
                      <button
                        onClick={() => getCategory(category.id)}
                        className="btn btn-warning btn-sm"
                      >
                        Edit
                      </button>{' '}
                      <button
                        onClick={() => deleteCategory(category.id)}
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
  console.log(state);
  return {
    categoryData: state.categoryData,
  };
};

const mapDispatchToProps = {
  getCategory,
  deleteCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableCategory);
