import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import { connect } from "react-redux";

class LiftingStateUpCart extends Component {

  totalUsingReduce = () => {
    return this.props.listBuyProduct.reduce((a,b) => {
      return a + b.soLuong;
    }, 0);
  }

  render() {
    const {detailProduct} = this.props;
    return (
      <div>
        <h3 className="title">Shopping Cart</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Cart ({this.totalUsingReduce()})
          </button>
        </div>
        <DanhSachSanPham />
        <Modal />
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={detailProduct.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Device detail</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Screen</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Operating System</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Front Camera</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Back Camera</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detailProduct: state.productReducer.detailProduct,
    listBuyProduct: state.productReducer.listBuyProduct,
  }
}

export default connect(mapStateToProps, null)(LiftingStateUpCart);