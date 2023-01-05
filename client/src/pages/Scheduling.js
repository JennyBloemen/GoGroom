import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import Header from "../components/webContainer.js";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";


import { QUERY_SCHEDULE, QUERY_PROFILES, QUERY_SINGLE_PROFILE } from "../utils/queries";
import jwt_decode from "jwt-decode";

import ScheduleForm from "./ScheduleForm.js";

function Schedule() {
  const { profileId } = useParams();
  const token = window.localStorage.getItem("id_token");
  const user = jwt_decode(token);
  const userid = user.data._id;

  const { loading, data } = useQuery(QUERY_SCHEDULE);
  const scheduleData = data?.schedule || {};
  // console.log(scheduleData);

  let userSchedule = [];
  for (let i = 0; i < scheduleData.length; i++) {
    if (scheduleData[i].owner._id === userid) {
      userSchedule.push(scheduleData[i]);
    }
  }

  if (loading) {
    return <h2>Loading, please hold</h2>;
  }

  return (
    <div>
      <Header></Header>
      <div className="homeBody">
        <h1>Schedule An Appointment</h1>
        <ScheduleForm></ScheduleForm>
      </div>
        {userSchedule.map((schedule, index) => (
          <div className="aptCard" key={index}>
            <h2 className="petname">{schedule.petName}</h2>
            <ul>
              <li>Day: {schedule.day}</li>
              <li>Time: {schedule.time}</li>
              <li>Service: {schedule.service}</li>
            </ul>
          </div>
        ))}
       </div> 
  );
};

export default Schedule;
