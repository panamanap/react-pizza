import React from 'react';
import PropTypes from 'prop-types';

export const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {items.map((item, index) => (
          <li
            className={activeCategory === index ? "active" : ""}
            key={`${item}__${index}`}
            onClick={() => onClickCategory(index)}
          >
            {" "}
            {item}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
})

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,  
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};  