import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import DateTimePicker from 'react-datetime-picker';

// function for Scheduling page
function Scheduling() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <h1>Scheduling</h1>
      <DateTimePicker />
    </div>
  );
}

// import ProfileList from '../components/ProfileList';

import { QUERY_PROFILES } from '../utils/queries';

const Scheduling = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

return (
<div className='homeBody'>
    <h1>Schedule An Appointment</h1>
    <div className='calendar'>
        
        <h2>This Week</h2>
        <div className='week'></div>

        <form className='makeApt'>
            <select>
              { loading ? ( <option>Loading...</option> ) : ( <option>Select a service</option> ) } 
              {scheduling.map((scheduling) => ( 
                <option key={profiles.uuid} value>
                  {`${scheduling.name} ${scheduling.description} (${scheduling.price})`}
                </option>
              ))}
            </select>

        </form>
    
    </div>
</div>

)};

export default Scheduling;