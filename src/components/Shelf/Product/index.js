import React from 'react';
import PropTypes from 'prop-types';

import Thumb from '../../Thumb';
import util from '../../../services/util';

const Product = props => {
  const product = props.product;

  product.quantity = 1;

  let formattedPrice = util.formatPrice(product.price, product.currencyId);

  let productInstallment;

  if (!!product.installments) {
    const installmentPrice = product.price / product.installments;

    productInstallment = (
      <div className="installment">
        <span>or {product.installments} x</span>
        <b>
          {' '}
          {product.currencyFormat}{' '}
          {util.formatPrice(installmentPrice, product.currencyId)}
        </b>
      </div>
    );
  }
  return (
    <div
      className="shelf-item"
      onClick={() => props.addProduct(product)}
      data-sku={product.sku}
    >
      {product.isFreeShipping && (
        <div className="shelf-stopper">
          <svg className="icon-tick" enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0"><g><path d="m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z"></path></g></svg>
          <div className="shelf-stopper__text">Yêu thích</div>
        </div>
      )}
      <Thumb
        classes="shelf-item__thumb"
        src={require(`../../../static/products/${product.sku}_1.jpg`)}
        alt={product.title}
      />
      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>{product.currencyFormat}</small>
          <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
        </div>
        {productInstallment}
      </div>
      <div className="shelf-item__buy-btn">Thêm vào giỏ</div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default Product;
