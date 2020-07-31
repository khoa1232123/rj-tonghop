import React, { useEffect, useState } from 'react';
import Products from './Products';
import Sidebar from './Sidebar';
import Filter from './Filter';
import data from '../../data.json';

const Main = (props) => {
  const [products, setProducts] = useState([]);
  const [size, setSize] = useState('');
  const [sort, setSort] = useState('');
  useEffect(() => {
    setProducts(data.products);
  }, [setProducts]);
  const sortProducts = (event) => {
    console.log(event.target.value);
    setSort(event.target.value);
  };

  const sizeProducts = (event) => {
    console.log(event.target.value);
    setSize(event.target.value);
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
            <Products products={products} />
          </div>
          <div className="col-12 col-md-3">
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
