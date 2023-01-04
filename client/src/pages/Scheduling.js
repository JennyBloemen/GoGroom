import React from 'react';
import { useQuery } from '@apollo/client';

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
                 {/* {services.map((service) => (
          <option key={service.uuid} value>
            {`${service.name} ${service.description} (${service.price})`} */}
          {/* </option> */}
        {/* ))} */}
            </select>

        </form>
    
    </div>
</div>

)};

export default Scheduling;