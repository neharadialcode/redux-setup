import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FirstApiActionList,
  SecondApiActionList,
  postCallActionList,
} from "../action/Actions";

const Hero = () => {
  const dispatch = useDispatch();
  const postlist = useSelector((state) => state);
  const firstApi = postlist.FirstReducrCase;
  const secondApi = postlist.SecondReducerCase.data;
  const [value, setValue] = useState({});
  const data = {
    userId: 5,
    date: "March",
    products: "Neha",
  };
  useEffect(() => {
    setValue(data);
    dispatch(FirstApiActionList());
    dispatch(SecondApiActionList());
    dispatch(postCallActionList(data));
  }, []);

  return (
    <div>
      {/* <h1>API FIRST CONTENT</h1> */}
      {/* {firstApi.data && (
        <div>
          <p>{firstApi.data.description && firstApi.data.description}</p>
          <p>
            {firstApi.data.images &&
              firstApi.data.images.map((obj) => <img src={obj} alt="obj" />)}
          </p>
        </div>
      )} */}
      {/* <h1>API SECOND CONTENT</h1> */}
      {/* {secondApi && secondApi.length && (
        <div>{secondApi && secondApi.map((obj) => <p>{obj}</p>)}</div>
      )} */}
      <h1>POST API CONTENT</h1>
      <p>{value.userId}</p>
      <p>{value.date}</p>
      <p>{value.products}</p>
    </div>
  );
};

export default Hero;
