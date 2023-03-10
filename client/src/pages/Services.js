import React from 'react';
import { useQuery } from '@apollo/client';
import Header from "../components/webContainer.js";

// import ProfileList from '../components/ProfileList';

import { QUERY_PROFILES } from '../utils/queries';

const Services = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];
// temporary code until services are built, need to remove
const services = ["brush", "wash", "trim"];
return (

<div>
<Header>
</Header>

<div className='servBody'>
    <h1 className='servH1'>SERVICES</h1>
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
    <div className='dogServices'>
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


</div>

)};

export default Services;