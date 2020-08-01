import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

const Cart = ({ cartItems, removeItemCart, createOrder }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      name,
      email,
      address,
      cartItems,
    };
    createOrder(order);
    setShowCheckout(false);
    setName('');
    setEmail('');
    setAddress('');
  };

  return (
    <div className="row cart">
      <div className="col-12">
        {cartItems.length === 0 ? (
          <span>Cart is empty</span>
        ) : (
          <span>You have {cartItems.length} in the cart</span>
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
                        onClick={() => removeItemCart(item)}
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

export default Cart;
