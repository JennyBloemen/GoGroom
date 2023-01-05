import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import DateTimePicker from "react-datetime-picker";
import Header from "../components/webContainer.js";
import { Link } from "react-router-dom";
import ScheduleForm from "./ScheduleForm.js";
// import jwt_decode from "jwt-decode";

// let userSchedule = [];
//   for (let i = 0; i < scheduleData.length; i++) {
//     if (scheduleData[i].owner._id == userid) {
//       userSchedule.push(scheduleData[i]);
//     }
//   }

// function for Scheduling page
// function Scheduling() {
//   const [value, onChange] = useState(new Date());

//   return (
//     <div>
//       <h1>Scheduling</h1>
//       <DateTimePicker />
//     </div>
//   );
// }

// import ProfileList from '../components/ProfileList';

import { QUERY_PROFILES } from "../utils/queries";

const Scheduling = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  // const token = window.localStorage.getItem("id_token");
  // const user = jwt_decode(token);
  // const userid = user.data._id;

  return (
    <div>
      <Header></Header>
      <div className="homeBody">
        <h1 className="servH1">Schedule An Appointment</h1>

        <ScheduleForm></ScheduleForm>
      
      {/* TODO @ash - make the info from database render here */}
        {/* </div>
        {userSchedule.map((schedule, index) => (
          <div className="aptCard" key={index}>
            <img src="" alt="your pet here" />
            <h2 className="petname">{schedule.petName}</h2>
            <ul>
              <li>Day: {schedule.day}</li>
              <li>Time: {schedule.time}</li>
              <li>Service: {schedule.service}</li>
              
            </ul>
            <a href="#">Edit</a>
            <a href="#">Delete</a>
          </div>
        ))}*/}
     </div> 
     </div> 
  );
};

export default Scheduling;






  {/* <Link className="btn btn-lg btn-info m-2" to="/scheduleform">
          Schedule Now
        </Link> */}
        {/* <form className="makeApt">
          <label>
            Pet's Name:
            <input type="text" name="name" />
          </label>

          <select id="day">
            <option value="mon">Monday</option>
            <option value="tues">Tuesday</option>
            <option selected value="wed">
              Wednesday
            </option>
            <option value="thurs">Thursday</option>
            <option value="fri">Friday</option>
          </select>
          <select id="time">
            <option value="9-11">9 AM - 11 AM</option>
            <option value="11-1">11 AM - 1 PM</option>
            <option defaultValue="1-3">1 PM - 3 PM</option>
            <option value="3-5">3 PM - 5 PM</option>
            <option value="5-7">5 PM - 7 PM</option>
          </select>
          <select id="service">
            <option value="bathAndBrush">Bath And Brush</option>
            <option value="nailFileAndPrep">Nail File and Prep</option>
            <option defaultValue="topCat">Top Cat</option>
            <option value="topCatPlus">Top Cat Plus</option>
            <option value="bathAndClip">Bath And Clip</option>
            <option value="nailGrindingAndSanitation">
              Nail Grinding & Sanitation
            </option>
            <option value="topDog">Top Dog</option>
            <option value="topDogPlus">Top Dog Plus</option>
          </select>
          <button type="submit">submit</button> */}
          {/* <select> */}
          {/* // day, time, and service */}

          {/* </select> */}
          {/* { loading ? ( <option>Loading...</option> ) : ( <option>Select a service</option> ) } 

              {scheduling.map((scheduling) => ( 
                <option key={profiles.uuid} value>
                  {`${scheduling.name} ${scheduling.description} (${scheduling.price})`} */}
          {/* </option> */}
          {/* ))} */}
        {/* </form> */}