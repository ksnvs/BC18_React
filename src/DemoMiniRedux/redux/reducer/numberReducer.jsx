let initialState = {
  number: 10,
};

export let numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Tăng": {
      state.number += action.payload;
      return { ...state };
    }
    case "Giảm": {
      state.number -= action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
