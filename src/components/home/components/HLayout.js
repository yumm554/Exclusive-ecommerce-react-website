import Categories from './Categories';
import FProduct from './FProduct';
import FProducts from './FProducts';
import Jumbotron from './Jumbotron';
import SProducts from './SProducts';
import Services from './Services';
import('../assets/css/home.css');

const HLayout = () => {
  return (
    <div className="e-com-padded-sec ">
      <Jumbotron />
      <SProducts
        redSec="Today's"
        mainHead="Flash Sales"
        type="discountP"
        apiSrc={['https://dummyjson.com/products?limit=7']}
        limit={5}
      />
      <Categories />
      <SProducts
        redSec="This Month"
        mainHead="Best Selling Products"
        type="bestP"
        apiSrc={['https://dummyjson.com/products?limit=4']}
        limit={4}
      />
      {/* <BSProducts /> */}
      <FProduct />
      <SProducts
        redSec="Our Products"
        mainHead="Explore Our Products"
        type="allP"
        apiSrc={[
          'https://dummyjson.com/products?limit=8',
          'https://dummyjson.com/products?limit=8',
        ]}
        limit={5}
      />
      <FProducts redSec="Feautured" mainHead="New Arrival" />
      <Services />
    </div>
  );
};

export default HLayout;
