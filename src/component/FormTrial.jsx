import React from "react";

const FormTrial = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form action="" className="form_inputes">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="Subject" />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTrial;
