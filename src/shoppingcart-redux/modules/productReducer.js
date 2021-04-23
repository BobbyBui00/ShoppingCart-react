import data from "./../data.json";

let initialState = {
    listProduct: data,
    detailProduct: data[0],
    listBuyProduct: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DETAIL":
            state.detailProduct = action.payload;
            return {...state};
        case "BUY":
            let listBuyProduct = [...state.listBuyProduct];
            if(action.payload.maSP) {
                const index = listBuyProduct.findIndex((product) => {
                    return product.maSP === action.payload.maSP;
                });
                if(index !== -1) {
                    listBuyProduct[index].soLuong++;
                } else {
                    const productNew = {
                        maSP: action.payload.maSP,
                        tenSP: action.payload.tenSP,
                        hinhAnh: action.payload.hinhAnh,
                        soLuong: 1,
                        donGia: action.payload.giaBan,
                    };
                    listBuyProduct = [...state.listBuyProduct, productNew];
                }
            }
            state.listBuyProduct = listBuyProduct;
            return {...state};
        case "DELETE": {
            let listBuyProduct = [...state.listBuyProduct];
            const index = listBuyProduct.findIndex((product) => {
                return product.maSP === action.payload.maSP;
            })
            if(index !== -1) {
                listBuyProduct.splice(index, 1);
            }
            state.listBuyProduct = listBuyProduct;
            return {...state}; 
        }
        case "MINUS": {
            let listBuyProduct = [...state.listBuyProduct];
            const index = listBuyProduct.findIndex((product) => {
                return product.maSP === action.payload.maSP;
            });
            if(listBuyProduct[index].soLuong === 1) {         
                listBuyProduct.splice(index, 1);
            } else {
                listBuyProduct[index].soLuong--;
            }
            state.listBuyProduct = listBuyProduct;
            return {...state};   
        }     
        case "ADD": {
            let listBuyProduct = [...state.listBuyProduct];
            const index = listBuyProduct.findIndex((product) => {
                return product.maSP === action.payload.maSP;
            });
            listBuyProduct[index].soLuong++;
            state.listBuyProduct = listBuyProduct;
            return {...state};  
        }  
        default:
            return {...state};
    }
}

export default productReducer;