import React from 'react';
import FormCategory from '../../components/Categories/FormCategory';
import TableCategory from '../../components/Categories/TableCategory';

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
