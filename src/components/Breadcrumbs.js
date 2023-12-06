import { Link } from 'react-router-dom';
import '../assets/css/breadcrumps.css';
const Breadcrumbs = () => {
  return (
    <div className="breadcrumps">
      <Link to="/">
        <span className="breadcrumps-span">Home</span>
      </Link>{' '}
      {window.location.pathname}
    </div>
  );
};
export default Breadcrumbs;
