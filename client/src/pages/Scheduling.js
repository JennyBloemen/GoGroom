import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
// import dayjs from 'dayjs';
// import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

// export default function BasicDateTimePicker() {
//   const [value, setValue] = React.useState(dayjs('2022-04-07'));

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DateTimePicker
//         renderInput={(props) => <TextField {...props} />}
//         label="DateTimePicker"
//         value={value}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//       />
//     </LocalizationProvider>
//   );
// }
   

// import ProfileList from '../components/ProfileList';

import { QUERY_PROFILES } from '../utils/queries';

const Scheduling = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];
  const [value, onChange] = useState(new Date());

  return (

<div className='homeBody'>
    <h1>Schedule An Appointment</h1>
    <div className='calendar'>
        
        <h2>This Week</h2>
        <div className='week'></div>

        <form className='makeApt'>
        <DateTimePicker />
            <select>
              {/* // day, time, and service */}
              
              </select>
              {/* { loading ? ( <option>Loading...</option> ) : ( <option>Select a service</option> ) } 
              {scheduling.map((scheduling) => ( 
                <option key={profiles.uuid} value>
                  {`${scheduling.name} ${scheduling.description} (${scheduling.price})`} */}
                {/* </option> */}
              {/* ))} */}

        </form>
    
    </div>
    </div>
  );
                };


export default Scheduling;