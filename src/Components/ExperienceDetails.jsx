import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

export default function ExperienceDetails({ experience }) {
  const detailsList = experience.map((each) => (
    <Details {...each} key={crypto.randomUUID()} />
  ));
  return (
    <div className="experience-details">
      <div className="title">
        <FontAwesomeIcon
          icon={faBriefcase}
          size="xl"
          style={{ color: '#0a0829' }}
        />
        Experience
      </div>
      <div className="details-container">{detailsList}</div>
    </div>
  );
}

function Details({
  company, position, startDate, endDate, location,
}) {
  return (
    <div className="details-container-row">
      <div className="details-col-one">
        <div className="dates">
          {startDate}
          -
          {endDate}
        </div>
        <div className="location">{location}</div>
      </div>
      <div className="details-col-two">
        <div className="company">{company}</div>
        <div className="position">{position}</div>
      </div>
    </div>
  );
}
