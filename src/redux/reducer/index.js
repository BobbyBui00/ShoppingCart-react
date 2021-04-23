import { combineReducers } from "redux";
import productReducer from "./../../shoppingcart-redux/modules/productReducer";

const rootReducer = combineReducers({
    productReducer,
});

export default rootReducer;