import React, { Component } from "react";
import SanPham from './san-pham';
import { connect } from "react-redux";

class DanhSachSanPham extends Component {

  renderHTML = () => {
    const {listProduct} = this.props;
    return listProduct.map((product) => {
      return (
        <SanPham key={product.maSP} product={product}/>
      )
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderHTML()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listProduct: state.productReducer.listProduct,
  }
}

export default connect(mapStateToProps, null)(DanhSachSanPham);