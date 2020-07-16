import React from 'react';
import AddCategory from '../../components/Categories/AddCategory';
import TableCategory from '../../components/Categories/TableCategory';

const Categories = () => {
  return (
    <div>
      <h1 className="mt-4">Categories</h1>
      <div className="row">
        <AddCategory />
        <TableCategory />
      </div>
    </div>
  );
};

export default Categories;
