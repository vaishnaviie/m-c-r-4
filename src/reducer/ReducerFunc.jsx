export const initialState = {
  xyz: "",
};

const ReducerFunc = (state, action) => {
  switch (action.type) {
    case "HAHA": {
      return { ...state };
    }

    default:
      break;
  }
};

export default ReducerFunc;
