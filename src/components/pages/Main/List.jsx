import React from 'react';
import PropTypes from 'prop-types';

const List = ({ artists }) => {
  return (
    <ul className="list">
      {artists.map((item) => (
        <li key={item.id} className="list-item">
          {item.name}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.object),
};

List.defaultProps = {
  artists: [],
};

export default List;
