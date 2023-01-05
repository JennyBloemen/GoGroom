import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Header from "../components/webContainer.js";
import { ADD_SCHEDULE } from "../utils/mutations";
import { QUERY_PETS } from "../utils/queries";

import Auth from "../utils/auth";
import jwt_decode from "jwt-decode";

const ScheduleForm = () => {
  const token = window.localStorage.getItem("id_token");
  const user = jwt_decode(token);
  const userid = user.data._id;

  const [formState, setFormState] = useState({
    petName: "",
    day: "",
    time: "",
    service: "",
    owner: userid,
  });
  const [addSchedule, { error, data }] = useMutation(ADD_SCHEDULE);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // var navigate = useNavigate();
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
     const { data } = await addSchedule({
        variables: { ...formState },
      });
    /*
      const { data } = await addSchedule({
        variables: { petName: formState.petName, day: formState.day, time: formState.time, service: formState.service, owner: userid},
      });
      */
      console.log(data);
    } catch (e) {
      console.error(e);
    }
    // reset form
    setFormState({
      petName: "",
      day: "",
      time: "",
      service: "",
      owner: userid,
    });
    
  };

  return (
    <div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            className="form-input"
            placeholder="Pet Name"
            name="petName"
            type="text"
            value={formState.petName}
            onChange={handleChange}
          />
          <input  //got to select
            className="form-input"
            placeholder="Day"
            name="day"
            type="text" 
            value={formState.day}  //how do we edit this value and the options below to make drop down versus input
            onChange={handleChange}
            />
          <input
            className="form-input"
            placeholder="Time"
            name="time"
            type="text"  
            value={formState.time}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="Service"
            name="service"
            type="text"
            value={formState.service}
            onChange={handleChange}
          />
          
          <button
            className="btn btn-block btn-info"
            style={{ cursor: "pointer" }}
            type="submit"
          >
            Submit
          </button>
        </form>

        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </div>
    </div>
  );
};

export default ScheduleForm;


//  <select id="day"> 
//            <option value="mon">Monday</option>
//            <option value="tues">Tuesday</option>
//            <option value="wed">Wednesday</option>
//            <option value="thurs">Thursday</option>
//            <option value="fri">Friday</option> 