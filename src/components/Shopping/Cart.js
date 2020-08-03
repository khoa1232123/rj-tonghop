import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
import {
  getCartItems,
  removeFromCart,
  clearOrder,
  createOrder,
} from '../../redux/actions/productActions';
import { connect } from 'react-redux';

const Cart = ({
  productData: { cartItems, order },
  getCartItems,
  removeFromCart,
  clearOrder,
  createOrder,
}) => {
  useEffect(() => {
    getCartItems();
  }, [getCartItems]);

  const [showCheckout, setShowCheckout] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      name,
      email,
      address,
      cartItems,
      total: cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    createOrder(newOrder);
    setShowCheckout(false);
    setName('');
    setEmail('');
    setAddress('');
  };

  const closeModal = () => {
    clearOrder();
  };

  return (
    <div className="row cart">
      <div className="col-12">
        {cartItems.length === 0 ? (
          <span>Cart is empty</span>
        ) : (
          <span>You have {cartItems.length} in the cart</span>
        )}
        {order && (
          <Modal isOpen={true} onRequestClose={() => closeModal()}>
            <Zoom>
              <button
                className="btn btn-danger close-modal"
                onClick={() => closeModal()}
              >
                X
              </button>
              <div className="order-detail">
                <h3 className="success-message">Your order has been placed.</h3>
                <h2>Order {order._id}</h2>
                <ul>
                  <li>
                    <div>Name:</div>
                    <div>{order.name}</div>
                  </li>
                  <li>
                    <div>Email:</div>
                    <div>{order.email}</div>
                  </li>
                  <li>
                    <div>Address:</div>
                    <div>{order.address}</div>
                  </li>
                  <li>
                    <div>Total:</div>
                    <div>${order.total}</div>
                  </li>
                  <li>
                    <div>Cart Items:</div>
                    <div>
                      {order.cartItems.map((item) => (
                        <div>
                          {item.count}*{item.title}
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </Zoom>
          </Modal>
        )}
        <hr />
        <Fade left cascade>
          <ul className="cart-items">
            {cartItems.map((item) => {
              return (
                <li key={item._id} className="cart-item">
                  <div className="image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="content">
                    <h5 className="title">{item.title}</h5>
                    <div className="bottom">
                      <span>
                        {item.count} X ${item.price}
                      </span>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Fade>
        {cartItems.length !== 0 && (
          <>
            <div className="cart-total">
              <span>
                Total: $
                {parseFloat(
                  cartItems.reduce((a, c) => a + c.price * c.count, 0)
                ).toFixed(1)}
              </span>
              <div
                className="btn btn-success"
                onClick={() => setShowCheckout(true)}
              >
                Proceed
              </div>
            </div>
            {showCheckout && (
              <div className="card cart-checkout p-3 mt-4">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Address..."
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <button
                    onClick={() => setShowCheckout(false)}
                    className="btn btn-danger cancel"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary float-right">
                    Checkout
                  </button>
                </form>
              </div>
            )}
          </>
        )}
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
  getCartItems,
  removeFromCart,
  clearOrder,
  createOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
