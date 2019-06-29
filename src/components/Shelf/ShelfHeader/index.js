import React from 'react';
import PropTypes from 'prop-types';

import Sort from '../Sort';
import Clearfix from '../../Clearfix';

const ShelfHeader = props => {
  return (
    <div className="shelf-container-header">
      <small className="products-found">
        <span>{props.productsLength} sản phẩm được tìm thấy.</span>
      </small>
      <Sort />
      <Clearfix />
    </div>
  );
};

ShelfHeader.propTypes = {
  productsLength: PropTypes.number.isRequired
};

export default ShelfHeader;
