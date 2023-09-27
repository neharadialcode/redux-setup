import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCallActionList } from "../action/Actions";
import { SecondDataApi, SecondPostApi } from "../apis/Api";

const FormTrial = () => {
  const initialValue = {
    name: "",
    email: "",
    address: "",
    message: "",
    phoneNumber: "",
  };
  const [formData, setFormData] = useState(initialValue);
  const [formValue, setFormValue] = useState({});
  const dispatch = useDispatch();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await SecondPostApi(formData);
    if (response.data) {
      setFormValue(response.json);
      alert("Done", "Something went correct!", "success");
    } else {
      alert("Oops", "Something went wrong!", "error");
    }
  };

  useEffect(() => {
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
              <input
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                type="text"
                placeholder="message"
                value={formData.phoneNumber}
              />
              <button>Submit</button>
            </form>
          </div>
          <h1>{formValue && formValue.name}</h1>
          <h1>{formValue && formValue.email}</h1>
          <h1>{formValue && formValue.message}</h1>
          <h1>{formValue && formValue.address}</h1>
        </div>
      </div>
    </div>
  );
};

export default FormTrial;
