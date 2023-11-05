import React from 'react';
import { getProducts } from '../handlers/getProducts';
import { useEffect } from 'react';
import Rating from '../components/Rating';
const Product = ({ asrc, products, setProducts, type, productRef }) => {
  useEffect(() => {
    getProducts(asrc)
      .then((resp) => {
        setProducts(resp.data.products);
      })
      .catch((err) => console.log(err));
  }, [setProducts, asrc]);

  return products ? (
    <div
      className={'sproduct-products ' + type}
      ref={productRef}
      style={{
        width: 102 + '%',
        gridTemplateColumns: `repeat(${products.length}, 23%)`,
      }}
    >
      {products.map((elem) => {
        return (
          <div className="sproduct-product">
            <div className="product-image">
              {elem.thumbnail ? (
                <img
                  className="product-thumbnail"
                  src={elem.thumbnail}
                  alt={elem.title}
                />
              ) : (
                <div className="product-thumbnail-sample"></div>
              )}

              {type === 'discountP' ? (
                <p className="product-discount-perc">
                  {Math.round(elem.discountPercentage) || 0}%
                </p>
              ) : (
                ''
              )}
            </div>

            <h1
              className={
                'product-title ' + (elem.title ? '' : 'sproduct-heading')
              }
            >
              {elem.title}
            </h1>
            <div
              className={
                (type === 'allP' ? 'pflex' : 'pnorm') + ' product-details'
              }
            >
              {type === 'allP' ? (
                <b className="pprice normal-price">${elem.price || '0.00'}</b>
              ) : (
                <div className="product-price">
                  <b className="pprice discount-price">
                    ${elem.price || '0.00'}
                  </b>
                  <b className="pprice original-price">
                    ${elem.price || '0.00'}
                  </b>
                </div>
              )}

              <div className="product-rating">
                <div>
                  <Rating />
                </div>
                <div>({elem.rating})</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <p>Something went wrong</p>
  );
};

export default Product;
