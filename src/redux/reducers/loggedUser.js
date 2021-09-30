const initialState = {};

const loggedUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return { ...state, ...payload };

    default:
      return state;
  }
};
export default loggedUserReducer;
