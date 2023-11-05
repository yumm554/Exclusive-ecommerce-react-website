import { useEffect, useState } from 'react';
import { getCategWthImg } from '../handlers/getCategories';
import { SectionsHead } from './SectionsHead';
import('../assets/css/fproducts.css');

const FProducts = ({ redSec, mainHead }) => {
  const [category, setCategory] = useState([
    {
      thumbnail: '',
      title: '',
      price: '',
      rating: '',
    },
    {
      thumbnail: '',
      title: '',
      price: '',
      rating: '',
    },
    {
      thumbnail: '',
      title: '',
      price: '',
      rating: '',
    },
    {
      thumbnail: '',
      title: '',
      price: '',
      rating: '',
    },
  ]);
  useEffect(() => {
    getCategWthImg()
      .then((resp) => setCategory(resp.data.products))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="home-sections e-com-fproducts">
      <SectionsHead redSec={redSec} mainHead={mainHead} />
      <div className="sproducts-product-cont-wrapper">
        {category ? (
          <div className="fproducts-products">
            {category.map((elem, index) => {
              return (
                <div className={'fproducts-product product' + (index + 1)}>
                  {elem.thumbnail ? (
                    <img
                      className="fproduct-image"
                      src={elem.thumbnail}
                      alt={elem.title}
                    />
                  ) : (
                    <div className="fproduct-image"></div>
                  )}
                  <div className="fproduct-details">
                    <h1
                      className={
                        'medium-heading ' +
                        (elem.title ? '' : 'fproduct-heading')
                      }
                    >
                      {elem.title}
                    </h1>
                    <p
                      className={
                        'medium-para ' +
                        (elem.description ? '' : 'fproduct-para')
                      }
                    >
                      {elem.description}
                    </p>
                    <div className="fproduct-button-cont">
                      <button className="e-com-button fproduct-button">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>Something went wrong</p>
        )}
      </div>
    </div>
  );
};
export default FProducts;
