import React from 'react';

const Products = ({ products }) => {
  return (
    <div className="row products">
      {products.length &&
        products.map((product) => {
          return (
            <div className="col-12 col-md-4 mb-4" key={product._id}>
              <div className="card product">
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="/">{product.title}</a>
                  </h5>
                  <span className="price">{product.price}$</span>
                  <a href="/" className="btn btn-primary add-to-cart">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Products;
