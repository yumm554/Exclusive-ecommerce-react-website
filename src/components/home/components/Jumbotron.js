import Sidebar from './Sidebar';
import JSlider from './JSlider';
import '../assets/css/jumbotron.css';

const Jumbotron = () => {
  return (
    <div className="e-com-jumbotron">
      <Sidebar />
      <JSlider />
    </div>
  );
};
export default Jumbotron;
