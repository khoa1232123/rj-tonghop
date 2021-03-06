import React from 'react';
import FormCategory from '../../components/Admin/Categories/FormCategory';
import TableCategory from '../../components/Admin/Categories/TableCategory';

const Categories = () => {
  return (
    <div>
      <h1 className="mt-4">Categories</h1>
      <div className="row">
        <FormCategory />
        <TableCategory />
      </div>
    </div>
  );
};

export default Categories;
