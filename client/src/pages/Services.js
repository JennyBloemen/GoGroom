import React from 'react';
import { useQuery } from '@apollo/client';
import Header from "../components/webContainer.js";

// import ProfileList from '../components/ProfileList';

import { QUERY_PROFILES } from '../utils/queries';

const Services = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

return (

<div>
<Header>
</Header>

{/* <div className='homeBody'>
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
</div> */}

<div className="homeBody">
  <div className="gifGuy">
    <img src="" alt="dog in bathtub gif" />
  </div>
  <div className="dogBanner">
    <img src="" alt="dog head image" />
    <ul className="dogServiceList">
    {/* {services.map((service) => (
      <li className="dogServiceListItem" key={service.uuid}>
        {`${service.title} ${service.description} (${service.price})`}
      </li>
    ))} */}
    </ul>
  </div>
  <div className="catBanner">
    <img src="" alt="cat head image"/>
    <ul className='catServiceList'>
    {/* {services.map((service) => (
      <li className="catServiceListItem" key={service.uuid}>
        {`${service.title} ${service.description} (${service.price})`}
      </li>
    ))} */}
    </ul>
  </div>
</div>
</div>

)};

export default Services;