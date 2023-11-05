import { ReactComponent as Star } from '../assets/images/sProducts/star.svg';
import '../assets/css/rating.css';
const Rating = ({ RNo }) => {
  return (
    <div className="product-rating-cont">
      <Star style={{ fill: '#FFAD33' }} />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
};
export default Rating;
