import React, { useEffect, useState } from 'react';
import Products from './Products';
import Cart from './Cart';
import Filter from './Filter';
import data from '../../data.json';

const Main = (props) => {
  const [products, setProducts] = useState([]);
  const [size, setSize] = useState('');
  const [sort, setSort] = useState('');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setProducts(data.products);
    if (localStorage.getItem('cartItems')) {
      setCartItems(JSON.parse(localStorage.getItem('cartItems')));
    }
  }, [setProducts, setCartItems]);

  const sortProducts = (event) => {
    console.log(event.target.value);
    setSort(event.target.value);
  };

  const sizeProducts = (event) => {
    console.log(event.target.value);
    setSize(event.target.value);
  };

  const addToCart = (product) => {
    const items = cartItems.slice();
    let alreadyInCart = false;
    items.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      items.push({ ...product, count: 1 });
    }
    setCartItems(items);
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  const removeItemCart = (product) => {
    const items = cartItems.slice();
    const newItems = items.filter((item) => item._id !== product._id);
    setCartItems(newItems);
    localStorage.setItem('cartItems', JSON.stringify(newItems));
  };

  const createOrder = (order) => {
    alert('Need to save order for ' + order.name);
  };

  return (
    <main className="shopping-cart">
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-12 col-md-9">
            <Filter
              count={products.length}
              sort={sort}
              sortProducts={sortProducts}
              size={size}
              sizeProducts={sizeProducts}
            />
            <hr />
            <Products products={products} addToCart={addToCart} />
          </div>
          <div className="col-12 col-md-3">
            <Cart
              cartItems={cartItems}
              removeItemCart={removeItemCart}
              createOrder={createOrder}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
