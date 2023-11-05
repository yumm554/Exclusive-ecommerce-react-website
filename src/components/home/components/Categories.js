import SetCategories from './SetCategories';
import RedSmallSection from './RedSmallSection';
import { useRef } from 'react';
import Arrow from './Arrow';
import('../assets/css/categories.css');

const Categories = () => {
  const categoryRef = useRef();
  const categ = SetCategories();

  return (
    <div className="home-sections e-com-categories">
      <RedSmallSection head="Categories" />
      <div className="category-head-section">
        <h1 className="section-main-heading categories-heading">
          Browse By Category
        </h1>
        <Arrow refOn={[categoryRef]} refLimit={categ} refTimes={16.66} />
      </div>
      <div className="categories-list-cont">
        {categ ? (
          <div
            className="categories-list"
            ref={categoryRef}
            style={{
              width: 102 + '%',
              gridTemplateColumns: `repeat(${categ.length},14.66%)`,
            }}
          >
            {categ.map((elem) => {
              return (
                <div className="categories-list-items">
                  {/* <img src={elem.icon} alt={elem} /> */}
                  <p className="categories-list-para">{elem || '--'}</p>
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
export default Categories;
