import '../assets/css/sidebar.css';
import { useEffect, useState } from 'react';
// import { getCategories } from '../handlers/getCategories'; //if working on real data
import ListItem from './ListItem';

const Sidebar = () => {
  const [categ, setCateg] = useState();

  useEffect(() => {
    setCateg([
      {
        id: 1,
        name: 'Electronics',
        subcategories: [
          {
            id: 101,
            name: 'Smartphones',
            subcategories: [],
          },
          {
            id: 102,
            name: 'Laptops',
            subcategories: [],
          },
        ],
      },
      {
        id: 2,
        name: 'Clothing',
        subcategories: [
          {
            id: 201,
            name: "Men's Clothing",
            subcategories: [],
          },
          {
            id: 202,
            name: "Women's Clothing",
            subcategories: [],
          },
        ],
      },
      {
        id: 3,
        name: 'Home & Garden',
        subcategories: [
          {
            id: 301,
            name: 'Furniture',
            subcategories: [],
          },
          {
            id: 302,
            name: 'Kitchen Appliances',
            subcategories: [],
          },
        ],
      },
      {
        id: 1,
        name: 'Sports & Outdoor',
        subcategories: [],
      },
      {
        id: 1,
        name: "Baby's & Toys",
        subcategories: [],
      },
      {
        id: 1,
        name: 'Health & Beauty',
        subcategories: [],
      },
      {
        id: 1,
        name: 'Kids',
        subcategories: [],
      },
      {
        id: 1,
        name: 'Books',
        subcategories: [],
      },
      {
        id: 1,
        name: 'Medicine',
        subcategories: [],
      },
      {
        id: 1,
        name: 'Groceries & Pets',
        subcategories: [],
      },
    ]);
    // getCategories()
    //   ?.then((resp) => {
    //     // setCateg(resp.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   }); //if working on real data
  }, []);

  return (
    <div className="e-com-sidebar">
      {categ ? (
        <ul className="e-com-categories">
          {categ.map((elem) => {
            return <ListItem item={elem} />;
          })}
        </ul>
      ) : (
        <p>something went wrong</p>
      )}
    </div>
  );
};
export default Sidebar;
