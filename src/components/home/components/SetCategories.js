import { useEffect, useState } from 'react';
import { getCategories } from '../handlers/getCategories';

const SetCategories = () => {
  const [categ, setCateg] = useState(['', '', '', '', '', '']);
  useEffect(() => {
    // setCateg([
    //   {
    //     name: 'Phones',
    //     icon: require('../assets/images/categories/phone.jpg'),
    //   },
    //   {
    //     name: 'Computers',
    //     icon: require('../assets/images/categories/phone.jpg'),
    //   },
    //   {
    //     name: 'SmartWatch',
    //     icon: require('../assets/images/categories/phone.jpg'),
    //   },
    //   {
    //     name: 'Camera',
    //     icon: require('../assets/images/categories/phone.jpg'),
    //   },
    //   {
    //     name: 'HeadPhones',
    //     icon: require('../assets/images/categories/phone.jpg'),
    //   },
    //   {
    //     name: 'Gaming',
    //     icon: require('../assets/images/categories/phone.jpg'),
    //   },
    //   {
    //     name: 'Computers',
    //     icon: require('../assets/images/categories/phone.jpg'),
    //   },
    //   {
    //     name: 'SmartWatch',
    //     icon: require('../assets/images/categories/phone.jpg'),
    //   },
    // ]);
    getCategories()
      ?.then((resp) => {
        setCateg(resp.data);
      })
      .catch((err) => {
        console.log(err);
      }); //if working on real data
  }, []);
  return categ;
};
export default SetCategories;
