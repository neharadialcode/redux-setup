import {
  FirstLoginApi,
  FirstpostAPI,
  SecondDataApi,
  SecondPostApi,
} from "../apis/Api";

export const FIRST_ACTION_DATA = "FIRST_ACTION_DATA";
export const POST_LIST = "POST_LIST";
export const SECOND_ACTION_DATA = "SECOND_ACTION_DATA";
export const POST_LIST_SIGNUP = "POST_LIST_SIGNUP";

export const FirstApiAction = (data) => ({
  type: FIRST_ACTION_DATA,
  data,
});
export const FirstApiActionList = (data) => async (dispatch) => {
  try {
    const response = await FirstLoginApi();
    dispatch(FirstApiAction(response));
  } catch (error) {}
};

export const postCallActionList = (data) => async (dispatch) => {
  try {
    const response = await FirstpostAPI(data);
    dispatch(postCallAction(response));
  } catch (error) {}
};

export function postCallAction(data) {
  return {
    type: POST_LIST,
    data: data,
  };
}

export const SecondApiAction = (data) => ({
  type: SECOND_ACTION_DATA,
  data,
});
export const SecondApiActionList = (data) => async (dispatch) => {
  try {
    const response = await SecondDataApi();
    dispatch(SecondApiAction(response));
  } catch (error) {}
};

export const secondPostCallActionList = (data) => async (dispatch) => {
  try {
    const response = await SecondPostApi(data);
    dispatch(postSecondCallAction(response));
  } catch (error) {}
};

export function postSecondCallAction(data) {
  return {
    type: POST_LIST_SIGNUP,
    data: data,
  };
}
