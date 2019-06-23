import React from 'react';
import { connect } from 'react-redux';
import { onDeleteFromCart, onIncreaseFromCart, onDecreaseFromCart } from '../../actions'
import './shopping-cart-table.css';

const ShoppingCartTable = ({ cartBooks, cartTotal, onIncrease, onDecrease, onDelete }) => {
  const RenderRow = ({ idx, title, count, total }) => {
    return (
      <tr key={idx} >
        <td>
          { idx + 1 }
        </td>
        <td>
          { title }
        </td>
        <td>
          { count }
        </td>
        <td>
          ${ total }
        </td>
        <td>
          <button
            onClick={() => onDelete(idx)}
            className="btn btn-outline-danger btn-small"
          >
            <i className="fa fa-trash-o" />
          </button>
          <button
            onClick={() => onIncrease(idx)}
            className="btn btn-outline-success btn-small"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease(idx)}
            className="btn btn-outline-warning btn-small"
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          { cartBooks.map(RenderRow) }
        </tbody>
      </table>

      <div className="total">
        Total: ${ cartTotal }
      </div>
    </div>
  );
};

const mapStateToProps = ({ cartBooks, cartTotal }) => {
  return {
    cartBooks,
    cartTotal,
  }
}

const mapDispatchToProps = {
  onIncrease: onIncreaseFromCart,
  onDecrease: onDecreaseFromCart,
  onDelete: onDeleteFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
