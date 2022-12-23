import React from 'react';
import { useQuery } from '@apollo/client';

import ProfileList from '../components/ProfileList';

import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

return (
<div className='homeBody'>
    <h1>SERVICES</h1>
    <div className='catServices'>
        <h2>CATS</h2>
    <ul className='catServiceList'>
        {services.map((service) => (
          <li className="catServiceListItem" key={service.uuid}>
            {`${service.name} ${service.description} (${service.price})`}
          </li>
        ))}
        </ul>
    </div>
    <div className='catServices'>
        <h2>DOGS</h2>
    <ul className='dogServiceList'>
        {services.map((service) => (
          <li className="cdogServiceListItem" key={service.uuid}>
            {`${service.name} ${service.description} (${service.price})`}
          </li>
        ))}
        </ul>
    </div>
</div>

)};

export default Services;