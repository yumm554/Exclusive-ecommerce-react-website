import { SectionsHead } from './SectionsHead';
import Product from './Product';
import { createRef, useEffect, useState } from 'react';
import('../assets/css/sProducts.css');

const SProducts = ({ redSec, mainHead, type, apiSrc, limit }) => {
  const [elRefs, setElRefs] = useState([]);
  useEffect(() => {
    setElRefs(Array.from(Array(apiSrc.length), () => createRef()));
  }, []);

  const [products, setProducts] = useState(
    Array.from(Array(limit), (elem) => {
      elem = {
        thumbnail: '',
        title: '',
        price: '',
        rating: '',
      };
      return elem;
    })
  );

  return (
    <div className="home-sections e-com-sproducts">
      <SectionsHead
        redSec={redSec}
        type={type}
        mainHead={mainHead}
        products={products}
        productRef={elRefs}
      />

      <div className="sproducts-products-wrapper">
        <div className="sproducts-products-cont">
          <div className={'sproducts-product-cont-wrapper ' + type}>
            {apiSrc.map((asrc, i) => {
              return (
                <Product
                  asrc={asrc}
                  products={products}
                  setProducts={setProducts}
                  type={type}
                  productRef={elRefs[i]}
                />
              );
            })}
            {products && type !== 'bestP' ? (
              <div className="sproducts-button-cont">
                <button className="red-button sproducts-button">
                  View All Products
                </button>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SProducts;
