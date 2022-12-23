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
            {`${service.name} ${service.description} (${service.price})`}
          </li>
        ))}
        </ul>

      </div>
      <div className="catBanner">
        <img src="" alt="cat head image"/>
        <ul>
          <li>service 1</li>
          <li>service 2</li>
          <li>service 3</li>
        </ul>

      </div>
    </div>
  );
};

export default Home;
