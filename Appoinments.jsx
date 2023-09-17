import React from "react";
import "../Css/Appoinments.css";

const Appoinments = () => {
  return (
    <>
      <div className="appointbold-main-wrapper">
        <div className="appointbold-form-wrapper">
          <form action=" " method="POST">
            <div className="appointbold-mb-5">
              <h1 className="fst">Appointments</h1>
              <p className="snd">Patient's Details</p>
              <label htmlFor="name" className="appointbold-form-label">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="appointbold-form-input"
              />
            </div>
            <div className="appointbold-mb-5">
              <label for="email" className="appointbold-form-label">
                {" "}
                Email Address{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="appointbold-form-input"
              />
            </div>
            <div className="flex flex-wrap appointbold--mx-3">
              <div className="w-full sm:w-half appointbold-px-3">
                <div className="appointbold-mb-5 w-full">
                  <label for="date" className="appointbold-form-label">
                    {" "}
                    Date of Appointment{" "}
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="appointbold-form-input"
                  />
                </div>
              </div>
              <div className="w-full sm:w-half appointbold-px-3">
                <div className="appointbold-mb-5">
                  <label for="time" className="appointbold-form-label">
                    {" "}
                    Time Slot{" "}
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    className="appointbold-form-input"
                  />
                </div>
              </div>
            </div>

            <div className="appointbold-mb-5 formbold-pt-3">
              <label className="appointbold-form-label appointbold-form-label-2">
                Address Details
              </label>
              <div className="flex flex-wrap appointbold--mx-3">
                <div className="w-full sm:w-half appointbold-px-3">
                  <div className="appointbold-mb-5">
                    <input
                      type="text"
                      name="area"
                      id="area"
                      placeholder="Enter area"
                      className="appointbold-form-input"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half appointbold-px-3">
                  <div className="appointbold-mb-5">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Enter city"
                      className="appointbold-form-input"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half appointbold-px-3">
                  <div className="appointbold-mb-5">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="Enter state"
                      className="appointbold-form-input"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half appointbold-px-3">
                  <div className="appointbold-mb-5">
                    <input
                      type="text"
                      name="post-code"
                      id="post-code"
                      placeholder="Post Code"
                      className="appointbold-form-input"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="appointbold-btn">Book Appointment</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Appoinments;
