import React, { useState } from "react";

const FormTrial = () => {
  const initialValue = {
    name: "",
    email: "",
    address: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialValue);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("dfghj");
  };
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
              />
              <input
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                placeholder="Email"
              />
              <input
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                type="text"
                placeholder="Address"
              />
              <input
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                type="text"
                placeholder="message"
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
