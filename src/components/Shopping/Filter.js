import React from 'react';

const Filter = ({ count, sort, size, sortProducts, sizeProducts }) => {
  return (
    <div className="row filter mb-4">
      <div className="col-12 col-md-4 filter-result">
        <h1>
          Total: <span>{count} items</span>
        </h1>
      </div>
      <div className="col-12 col-md-4 filter-sort">
        <span>Order</span>
        <select
          name="order"
          className="form-control"
          value={sort}
          onChange={sortProducts}
        >
          <option value="">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="col-12 col-md-4 filter-size">
        <span>Size</span>
        <select
          name="size"
          className="form-control"
          value={size}
          onChange={sizeProducts}
        >
          <option value="">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
