import React from 'react';
import {
  filterProductsBySize,
  orderProductsByPrice,
} from '../../redux/actions/productActions';
import { connect } from 'react-redux';

const Filter = ({
  productData: { products, filterProducts },
  filterProductsBySize,
  orderProductsByPrice,
}) => {
  return (
    <div className="row filter">
      <div className="col-12 col-md-4 filter-result">
        <span>
          Total: <span>{products.length} products</span>
        </span>
      </div>
      <div className="col-12 col-md-4 filter-sort">
        <span>Order</span>
        <select
          name="order"
          className="form-control"
          onChange={(e) => orderProductsByPrice(products, e.target.value)}
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
          onChange={(e) => filterProductsBySize(filterProducts, e.target.value)}
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

const mapStateToProps = (state) => {
  return {
    productData: state.productData,
  };
};

const mapDispatchToProps = {
  filterProductsBySize,
  orderProductsByPrice,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
