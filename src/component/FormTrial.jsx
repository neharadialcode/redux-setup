import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCallActionList } from "../action/Actions";
import { SecondDataApi } from "../apis/Api";

const FormTrial = () => {
  const initialValue = {
    name: "",
    email: "",
    address: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialValue);
  const [formValue, setFormValue] = useState({});
  const dispatch = useDispatch();
  const postlist = useSelector((state) => state);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await SecondDataApi(
      "http://192.168.0.177:8000/api/v1/signup",
      formData
    );
    if (response.data) {
      setFormData(initialValue);
      alert("Done", "Something went correct!", "success");
    } else {
      alert("Oops", "Something went wrong!", "error");
    }
    // if (
    //   formData.name &&
    //   formData.email &&
    //   formData.address &&
    //   formData.message
    // ) {
    //   console.log(response, "response");
    // }
  };

  useEffect(() => {
    setFormValue(formData);
    dispatch(postCallActionList(formData));
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form
              action=""
              onSubmit={(e) => onSubmitHandler(e)}
              className="form_inputes"
            >
              <input
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                type="text"
                placeholder="Name"
                value={formData.name}
              />
              <input
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                placeholder="Email"
                value={formData.email}
              />
              <input
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                type="text"
                placeholder="Address"
                value={formData.address}
              />
              <input
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                type="text"
                placeholder="message"
                value={formData.message}
              />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTrial;
