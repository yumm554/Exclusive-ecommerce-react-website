import { useEffect, useState } from 'react';
// import { getProduct } from '../handlers/getFProduct';
import GetTimer from './GetTimer';
import '../assets/css/fproduct.css';

const FProduct = () => {
  const [product, setProduct] = useState({
    thumbnail: require('../assets/images/fproduct/speaker.png'),
    title: 'speaker',
  });
  // useEffect(() => {
  //   getProduct()
  //     .then((resp) => {
  //       setProduct(resp.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <div className="home-sections fproduct-cont">
      {
        <div className="fproduct">
          <div className="feaproduct-details">
            <p className="feaproduct-categories">Categories</p>
            <h1 className="feaproduct-heading">
              Enhance Your Music Experience
            </h1>
            <div className="feaproduct-timer-cont">
              <GetTimer template="template2" />
            </div>
            <button className="feaproduct-button">Buy Now!</button>
          </div>
          <div className="feaproduct-img-cont">
            {product.thumbnail ? (
              <img
                className="feaproduct-img"
                src={product.thumbnail}
                alt={product.title}
              />
            ) : (
              <div className="feaproduct-img-sample"></div>
            )}
          </div>
        </div>
      }
    </div>
  );
};
export default FProduct;
