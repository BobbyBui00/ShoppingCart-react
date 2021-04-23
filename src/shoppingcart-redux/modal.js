import React, { Component } from "react";
import { connect } from "react-redux";

class Modal extends Component {

  renderHTML = () => {
    return this.props.listBuyProduct.map((buyProduct) => {
      return (
        <tr key={buyProduct.maSP}>
          <td>{buyProduct.maSP}</td>
          <td>{buyProduct.tenSP}</td>
          <td>
            <img src={buyProduct.hinhAnh} width={50} alt="" />
          </td>
          <td>
            <button onClick={() => {this.props.minusButton(buyProduct)}}>-</button>
            {buyProduct.soLuong}
            <button onClick={() => {this.props.addButton(buyProduct)}}>+</button>
          </td>
          <td>{buyProduct.donGia}</td>
          <td>{Number(buyProduct.donGia) * Number(buyProduct.soLuong)}</td>
          <td>
            <button className="btn btn-danger" onClick={() => {this.props.deleteBuyProduct(buyProduct)}}>Delete</button>
          </td>
        </tr>
      )
    });
  }

  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cart</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderHTML()}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listBuyProduct: state.productReducer.listBuyProduct,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBuyProduct: (product) => { 
      const action = {
        type: "DELETE",
        payload: product,
      };
      dispatch(action);
    },

    minusButton: (product) => {
      const action = {
        type: "MINUS",
        payload: product,
      };
      dispatch(action);
    },

    addButton: (product) => {
      const action = {
        type: "ADD",
        payload: product,
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);