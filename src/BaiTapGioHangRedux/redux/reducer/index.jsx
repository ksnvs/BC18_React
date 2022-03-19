import { combineReducers } from "redux";
import { baiTapGioHangReducer } from "./BaiTapGioHangReducer";
export const rootReducerGioHang = combineReducers({
  baiTapGioHangReducer,
});
