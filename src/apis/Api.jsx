import { axiosRequest } from "../common/Helper";

export const FirstLoginApi = async () => {
  return await axiosRequest("GET", `https://dummyjson.com/product/1`);
};
export const FirstpostAPI = async (data) => {
  return await axiosRequest("POST", `https://fakestoreapi.com/carts`, data);
};
export const SecondDataApi = async () => {
  return await axiosRequest("GET", `https://dummyjson.com/product/categories`);
};
export const SecondPostApi = async (data) => {
  return await axiosRequest(
    "POST",
    `http://192.168.0.177:8000/api/v1/signup`,
    data
  );
};
