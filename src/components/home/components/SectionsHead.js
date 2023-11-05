import React, { useEffect, useRef, useState } from 'react';
import RedSmallSection from './RedSmallSection';
import GetTimer from './GetTimer';
import Arrow from './Arrow';
export function SectionsHead({ redSec, type, mainHead, products, productRef }) {
  const sectionCon = useRef();
  const [havingTimer, setHavingTimer] = useState();

  useEffect(() => {
    if (type === 'discountP') {
      setHavingTimer(true);
      sectionCon.current.classList.add('thrice');
    } else {
      sectionCon.current.classList.add('twice');
    }
  }, []);
  return (
    <>
      <RedSmallSection head={redSec} />

      <div className={type + ' flash-sale'} ref={sectionCon}>
        <h1 className="section-main-heading flash-sale-heading">{mainHead}</h1>

        {havingTimer && (
          <div className="timer-cont">
            <GetTimer />
          </div>
        )}
        {products?.length > 4 ? (
          <div className="arrows-cont">
            <Arrow refOn={productRef} refLimit={products} refTimes={25} />
          </div>
        ) : type ? (
          <button className="red-button">View All</button>
        ) : (
          ''
        )}
      </div>
    </>
  );
}
