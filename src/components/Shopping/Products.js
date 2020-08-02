import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
import { connect } from 'react-redux';
import { fetchProducts, addToCart } from '../../redux/actions/productActions';

const Products = ({ productData: { products }, addToCart, fetchProducts }) => {
  const [productModal, setProductModal] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const openModal = (product) => {
    setProductModal(product);
  };

  const closeModal = () => {
    setProductModal(null);
  };

  const showProductModal = productModal ? (
    <Modal isOpen={true}>
      <button
        style={{ zIndex: 9, position: 'absolute', top: 10, right: 10 }}
        className="btn btn-danger float-right"
        onClick={() => closeModal()}
      >
        X
      </button>
      <Zoom>
        <div className="row">
          <div className="col-12 col-md-4">
            <img
              style={{ width: '100%' }}
              className="image"
              src={productModal.image}
              alt={productModal.title}
            />
          </div>
          <div className="col-12 col-md-8">
            <h3>{productModal.title}</h3>
            <span style={{ fontSize: 24 }}>${productModal.price}</span>
            <p>{productModal.description}</p>
            <p>
              <span className="mr-2">Available Sizes:</span>
              {productModal.availableSizes.map((x) => (
                <span>
                  <button className="btn btn-light mr-2">{x}</button>
                </span>
              ))}
            </p>
            <button
              onClick={() => addToCart(productModal)}
              className="btn btn-primary add-to-cart"
            >
              Add to cart
            </button>
          </div>
        </div>
      </Zoom>
    </Modal>
  ) : null;

  return (
    <Fade bottom cascade>
      <React.Fragment>
        <div className="row products">
          {products.length !== 0 &&
            products.map((product) => {
              return (
                <div className="col-12 col-md-4 mb-4" key={product._id}>
                  <div className="card product">
                    <a
                      href={'#' + product._id}
                      onClick={() => openModal(product)}
                    >
                      <img
                        className="card-img-top"
                        src={product.image}
                        alt={product.title}
                      />
                    </a>
                    <div className="card-body">
                      <h5 className="card-title">
                        <a
                          href={'#' + product._id}
                          onClick={() => openModal(product)}
                        >
                          {product.title}
                        </a>
                      </h5>
                      <span className="price">{product.price}$</span>
                      <button
                        onClick={() => addToCart(product)}
                        className="btn btn-primary add-to-cart"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        {showProductModal}
      </React.Fragment>
    </Fade>
  );
};

const mapStateToProps = (state) => {
  return {
    productData: state.productData,
  };
};

const mapDispatchToProps = {
  fetchProducts,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
