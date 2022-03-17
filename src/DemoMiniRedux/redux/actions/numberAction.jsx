import { TANG } from "../constants/numberConstant";

export const TangSoLuongAction = (value) => {
  return {
    type: TANG,
    payload: value,
  };
};
