import React from "react";
import { useQuery } from "@apollo/client";
import Header from "../components/webContainer.js";

// import Profile from "../components/Profile";

import { QUERY_PROFILES } from "../utils/queries";

function Home() {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];
  // temporary code until services are built, need to remove
  const services = ["brush", "wash", "trim"];
  return (
    // <>
    //   <h1>test</h1>
    // </>
    <div>
    <Header>
    </Header>
    
    <div className="homeBody">
      <div className="gifGuy">
        <img src="" alt="dog in bathtub gif" />
      </div>
      <div className="dogBanner">
        <img src="" alt="dog head image" />
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
    </div></div>
  );
}

export default Home;
