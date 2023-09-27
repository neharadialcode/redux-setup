import { POST_LIST_SIGNUP } from "../action/Actions";

const initialState = {
  data: {},
};

const ThirdReducerCase = (state = initialState, action, data) => {
  switch (action.type) {
    case POST_LIST_SIGNUP:
      return {
        data: action.data,
      };
    default:
      return state;
  }
};
export default ThirdReducerCase;
