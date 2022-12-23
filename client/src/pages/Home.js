import React from 'react';
import { useQuery } from '@apollo/client';

import ProfileList from '../components/ProfileList';

import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <div className="homeBody">
      <div className="gifGuy">
        <img src="" alt="dog in bathtub gif"/>
      </div>
      <div className="dogBanner">
        <img src="" alt="dog head image"/>
        <ul className="dogServiceList">
        {services.map((service) => (
          <li className="dogServiceListItem" key={service.uuid}>
            {`${service.title} ${service.description} (${service.price})`}
          </li>
        ))}
        </ul>

      </div>
      <div className="catBanner">
        <img src="" alt="cat head image"/>
        <ul className='catServiceList'>
        {services.map((service) => (
          <li className="catServiceListItem" key={service.uuid}>
            {`${service.title} ${service.description} (${service.price})`}
          </li>
        ))}
        </ul>

      </div>
    </div>
  );
};

export default Home;
