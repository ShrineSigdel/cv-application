import React, { useState } from 'react';

export default function ExperienceForm({ addPExperience }) {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');

  function clearFormData() {
    setCompany('');
    setPosition('');
    setStartDate('');
    setEndDate('');
    setLocation('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addPExperience(company, position, startDate, endDate, location);
    clearFormData();
  };

  return (
    <form className="experience-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-title">Experience</div>
      <label htmlFor="company">Company: </label>
      <input type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} />
      <label htmlFor="position">Position: </label>
      <input type="text" id="position" value={position} onChange={(e) => setPosition(e.target.value)} />
      <label htmlFor="startDate">Start Date: </label>
      <input type="text" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <label htmlFor="endDate">End Date: </label>
      <input type="text" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <label htmlFor="location">Location: </label>
      <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <button className="submit btn">Submit</button>
    </form>
  );
}
