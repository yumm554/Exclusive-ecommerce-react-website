import { useState } from 'react';
import { ReactComponent as RightArrow } from '../assets/images/sidebar/right-arrow.svg';
import { ReactComponent as DownArrow } from '../assets/images/sidebar/arrow-down.svg';

const ListItem = ({ item }) => {
  const [childrenVisib, setChildrenVisib] = useState(false);
  const [arrowCon, setArrowCon] = useState(true);

  let children = null;
  if (item.subcategories.length) {
    children = (
      <ul className="e-com-subcategories">
        {item.subcategories.map((i) => (
          <ListItem item={i} />
        ))}
      </ul>
    );
  }

  return (
    <li
      key={item.id}
      className="e-com-categories-item"
      onClick={() => {
        setChildrenVisib(!childrenVisib);
        setArrowCon(!arrowCon);
      }}
    >
      {children ? (
        <div className="subcategories-item-parent">
          {item.name}
          <div className="sidebar-icon-cont">
            {arrowCon ? <RightArrow /> : <DownArrow />}
          </div>
        </div>
      ) : (
        item.name
      )}
      {childrenVisib && (
        <div className="e-com-categories-children">{children}</div>
      )}
    </li>
  );
};
export default ListItem;
