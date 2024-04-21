import React, { useState } from 'react';

export default function EducationForm({ addEducation }) {
  const [institute, setInstitute] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');

  function clearFormData() {
    setInstitute('');
    setDegree('');
    setStartDate('');
    setEndDate('');
    setLocation('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addEducation(institute, degree, startDate, endDate, location);
    clearFormData();
  };

  return (
    <form className="education-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-title">Education Form</div>
      <label htmlFor="institute">Institute: </label>
      <input type="text" id="institute" value={institute} onChange={(e) => setInstitute(e.target.value)} />
      <label htmlFor="degree">Degree: </label>
      <input type="text" id="degree" value={degree} onChange={(e) => setDegree(e.target.value)} />
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
