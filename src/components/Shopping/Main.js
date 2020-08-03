import React from 'react';
import Products from './Products';
import Cart from './Cart';
import Filter from './Filter';

const Main = (props) => {
  return (
    <main className="shopping-cart">
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-12 col-md-9">
            <Filter />
            <hr />
            <Products />
          </div>
          <div className="col-12 col-md-3">
            <Cart />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
