import React from 'react';
import { useQuery } from '@apollo/client';
import Header from "../components/webContainer.js";
// import ProfileList from '../components/ProfileList';

import { QUERY_PROFILES } from '../utils/queries';

const Scheduling = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

return (
  <div>
     <Header></Header>
<div className='homeBody'>
    <h1>Schedule An Appointment</h1>
  
        
        <form className='makeApt'>
        <label>
    Pet's Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
  <select id='day'>
  <option value="mon">Monday</option>
  <option value="tues">Tuesday</option>
  <option selected value="wed">Wednesday</option>
  <option value="thurs">Thursday</option>
  <option value="fri">Friday</option>
</select>
<select id='time'>
  <option value="9-11">9 AM - 11 AM</option>
  <option value="11-1">11 AM - 1 PM</option>
  <option selected value="1-3">1 PM - 3 PM</option>
  <option value="3-5">3 PM - 5 PM</option>
  <option value="5-7">5 PM - 7 PM</option>
</select>
<select id='service'>
  {/* TODO @ ashley map through services and move button if you want */}
  <option value="mon">Monday</option>
  <option value="tues">Tuesday</option>
  <option selected value="wed">Wednesday</option>
  <option value="thurs">Thursday</option>
  <option value="fri">Friday</option>
</select>


        </form>
    
  
</div>
</div>

)};

export default Scheduling;