import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faChild,
} from '@fortawesome/free-solid-svg-icons';

export default function PersonalDetails({
  fullname,
  dateofbirth,
  email,
  phone,
  location,
}) {
  return (
    <div className="personal-details">
      <div className="name">{fullname}</div>
      <div className="dateofbirth">
        <FontAwesomeIcon
          icon={faChild}
          size="xl"
          style={{ color: '#63E6BE' }}
        />
        DOB:
        {dateofbirth}
      </div>
      <div className="email">
        <FontAwesomeIcon
          icon={faEnvelope}
          size="xl"
          style={{ color: '#63E6BE' }}
        />
        {email}
      </div>
      <div className="phone">
        <FontAwesomeIcon
          icon={faPhone}
          size="xl"
          style={{ color: '#63E6BE' }}
        />
        {phone}
      </div>
      <div className="location">
        <FontAwesomeIcon
          icon={faLocationDot}
          size="xl"
          style={{ color: '#63E6BE' }}
        />
        {location}
      </div>
    </div>
  );
}
