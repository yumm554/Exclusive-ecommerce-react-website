import Sidebar from './Sidebar';
import JSlider from './JSlider';
import '../assets/css/jumbotron.css';

const Jumbotron = () => {
  return (
    <div className="e-com-jumbotron">
      <div className="sidebar">
        <Sidebar />
      </div>
      <JSlider />
    </div>
  );
};
export default Jumbotron;
