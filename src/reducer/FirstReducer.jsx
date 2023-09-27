import { FIRST_ACTION_DATA } from "../action/Actions";
import { POST_LIST } from "../action/Actions";

const initialState = {
  data: {},
  name: [],
};

const FirstReducrCase = (state = initialState, action) => {
  switch (action.type) {
    case FIRST_ACTION_DATA:
      return {
        ...state,
        data: action.data,
      };

    case POST_LIST:
      return {
        name: action.data,
      };
    default:
      return state;
  }
};
export default FirstReducrCase;
