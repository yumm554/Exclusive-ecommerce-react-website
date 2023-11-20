import { createRef, useEffect, useRef, useState } from 'react';
import { ReactComponent as ArrowRight } from '../assets/images/jumbotronSlider/arrow-right.svg';
import('../assets/css/JSlider.css');

const JSlider = () => {
  const [PBannerData, setPBannerData] = useState();
  const jsliderbanner = useRef();
  const dotsRef = useRef({});
  const jsliderfunc = useRef();
  useEffect(() => {
    setPBannerData([
      {
        id: 1,
        name: 'Up to 10% off Voucher',
        toCategory: {
          name: 'iphone 14 series',
          logo: require('../assets/images/jumbotronSlider/bannerProductLogo.png'),
          image: require('../assets/images/jumbotronSlider/bannerProductImage.png'),
        },
        toProduct: {},
      },
      {
        id: 101,
        name: 'Up to 10% off Voucher',
        toCategory: {
          name: 'iphone 14 series',
          logo: require('../assets/images/jumbotronSlider/bannerProductLogo.png'),
          image: require('../assets/images/jumbotronSlider/bannerProductImage.png'),
        },
        toProduct: {},
      },
      {
        id: 201,
        name: 'Up to 10% off Voucher',
        toCategory: {
          name: 'iphone 14 series',
          logo: require('../assets/images/jumbotronSlider/bannerProductLogo.png'),
          image: require('../assets/images/jumbotronSlider/bannerProductImage.png'),
        },
        toProduct: {},
      },
    ]);

    jsliderfunc.current = (refery, i) => {
      Object.values(dotsRef.current).forEach(
        (elem) => (elem.current.style.backgroundColor = '#e3e3e3')
      );
      refery.current.style.backgroundColor = '#db4444';
      jsliderbanner.current.style.transform = `translateX(-${i * (100 / 3)}%)`;
    };
  }, []);

  useEffect(() => {
    var refery;
    var i = 0;
    const intID = setInterval(() => {
      refery = dotsRef.current[i];
      jsliderfunc.current(refery, i);
      i++;
      if (i > 2) {
        i = 0;
      }
    }, 4000);

    return () => clearInterval(intID);
  }, []);

  return (
    <div className="jslider-cont">
      <div className="jslider-main">
        <div
          className="jslider"
          ref={jsliderbanner}
          style={{ width: PBannerData?.length * 100 + '%' }}
        >
          {PBannerData ? (
            PBannerData.map((elem) => {
              return (
                <div className="jslider-banner">
                  <div className="jslider-banner-wrapper">
                    <div className="jslider-banner-info">
                      <div className="jslider-banner-brand">
                        <img
                          className="jslider-banner-brand-img"
                          src={elem.toCategory.logo}
                          alt="banner-product-logo"
                        />
                        <p>{elem.toCategory.name}</p>
                      </div>
                      <h1 className="jslider-banner-info-name">{elem.name}</h1>
                      <button className="e-com-button JSlider-shopnow-button">
                        <span className="e-com-button-content">Shop Now </span>
                        <ArrowRight />
                      </button>
                    </div>
                    <div className="jslider-banner-image">
                      <img
                        className="jslider-banner-image-img"
                        src={elem.toCategory.image}
                        alt="banner-productImage"
                      />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>something went wrong</p>
          )}
        </div>
        {PBannerData ? (
          <div className="jslider-dots-con">
            {PBannerData.map((elem, i) => {
              const ref = createRef();
              dotsRef.current[i] = ref;
              return (
                <div
                  ref={dotsRef.current[i]}
                  onClick={() => {
                    jsliderfunc.current(dotsRef.current[i], i);
                  }}
                  className={'jslider-dot _' + (i + 1 || '')}
                ></div>
              );
            })}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
export default JSlider;
