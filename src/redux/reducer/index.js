import handleCart from "./handleCart";
import productViewpage from "./productview";
import { combineReducers } from "redux";
const rootReducers = combineReducers({
    handleCart,
    productViewpage,
})
export default rootReducers;