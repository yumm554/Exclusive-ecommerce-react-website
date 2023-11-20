import { useEffect, useState } from 'react';
import { ReactComponent as TwoDots } from '../assets/images/sProducts/two-dots.svg';

const GetTimer = ({ template }) => {
  template
    ? import('../assets/css/getTimer2.css')
    : import('../assets/css/getTimer.css');

  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const countDownDate = new Date('Jan 5, 2024 15:37:25').getTime();
  useEffect(() => {
    setInterval(function () {
      const now = new Date().getTime();

      const distance = countDownDate - now;
      setDays(
        (Math.floor(distance / (1000 * 60 * 60 * 24)) + '').padStart(2, '0')
      );
      setHours(
        (
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + ''
        ).padStart(2, '0')
      );
      setMinutes(
        (Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + '').padStart(
          2,
          '0'
        )
      );
      setSeconds(
        (Math.floor((distance % (1000 * 60)) / 1000) + '').padStart(2, '0')
      );
    }, 1000);
  }, []);

  return (
    <div className={'flash-sale-timer ' + (template ? template : '')}>
      <div className="time-cont days">
        <p className="time-head">Days</p>
        <div className="time">{days}</div>
      </div>

      {template ? '' : <TwoDots />}
      <div className="time-cont hours">
        <p className="time-head">Hours</p>
        <div className="time">{hours}</div>
      </div>
      {template ? '' : <TwoDots />}
      <div className="time-cont minutes">
        <p className="time-head">Minutes</p>
        <div className="time">{minutes}</div>
      </div>
      {template ? '' : <TwoDots />}
      <div className="time-cont seconds">
        <p className="time-head">Seconds</p>
        <div className="time">{seconds}</div>
      </div>
    </div>
  );
};
export default GetTimer;
