import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';

export default function EducationalDetails({ education }) {
  const detailsList = education.map((each) => (
    <Details {...each} key={crypto.randomUUID()} />
  ));
  return (
    <div className="educational-details">
      <div className="title">
        {' '}
        <FontAwesomeIcon
          icon={faSchool}
          size="xl"
          style={{ color: '#0a0829' }}
        />
        Education
      </div>
      <div className="details-container">{detailsList}</div>
    </div>
  );
}

function Details({
  institute, degree, startDate, endDate, location,
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
        <div className="institute">{institute}</div>
        <div className="degree">{degree}</div>
      </div>
    </div>
  );
}
