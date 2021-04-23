import React, { Component } from "react";
import { connect } from "react-redux";

class SanPham extends Component {
  render() {
    const {product} = this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={product.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{product.tenSP}</h4>
            <button className="btn btn-success" onClick={() => {this.props.productDetail(product)}}>Detail</button>
            <button className="btn btn-danger" onClick={() => {this.props.buyProduct(product)}}>Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    productDetail: (product) => {
      const action = {
        type: "DETAIL",
        payload: product,
      };
      dispatch(action);
    },

    buyProduct: (product) => {
      const action = {
        type: "BUY",
        payload: product,
      };
      dispatch(action);
    },
  }; 
}

export default connect(null, mapDispatchToProps)(SanPham);