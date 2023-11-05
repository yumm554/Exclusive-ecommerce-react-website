import { ReactComponent as LeftArrow } from '../assets/images/arrow/arrow-left.svg';
import { ReactComponent as RightArrow } from '../assets/images/arrow/arrow-right.svg';

import '../assets/css/arrow.css';
import { useEffect, useState } from 'react';

const Arrow = ({ refOn, refLimit, refTimes }) => {
  const [arrow, setArrow] = useState(0);

  useEffect(() => {
    refOn.map(
      (elem) => (elem.current.style.transform = `translateX(${arrow}%)`)
    );
  }, [arrow]);
  return (
    <div className="arrows">
      <div
        className="arrow left-arrow"
        onClick={() => {
          var trans = arrow + refTimes;
          if (trans > 0) trans = 0;
          setArrow(trans);
        }}
      >
        <LeftArrow />
      </div>
      <div
        className="arrow right-arrow"
        onClick={() => {
          var trans = arrow - refTimes;
          const maxTrans = (refLimit.length - 4) * refTimes;
          if (trans < -maxTrans) trans = -maxTrans;
          setArrow(trans);
        }}
      >
        <RightArrow />
      </div>
    </div>
  );
};
export default Arrow;
