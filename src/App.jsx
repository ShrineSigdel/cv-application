import React, { useState, useEffect } from 'react';
import PersonalForm from './Components/PersonalForm';
import EducationForm from './Components/EducationForm';
import ExperienceForm from './Components/ExperienceForm';
import CurriculumVitae from './Components/CurriculumVitae';

export default function App() {
  const [person, setPerson] = useState(() => {
    const local = localStorage.getItem('PERSONS');
    if (local === null) return {};
    return JSON.parse(local);
  });

  const [education, setEducation] = useState(() => {
    const local = localStorage.getItem('EDUCATION');
    if (local === null) return [];
    return JSON.parse(local);
  });

  const [experience, setExperience] = useState(() => {
    const local = localStorage.getItem('EXPERIENCE');
    if (local === null) return [];
    return JSON.parse(local);
  });

  // Local Storage for persons, education and experience respectively
  useEffect(() => {
    localStorage.setItem('PERSONS', JSON.stringify(person));
  }, [person]);

  useEffect(() => {
    localStorage.setItem('EDUCATION', JSON.stringify(education));
  }, [education]);

  useEffect(() => {
    localStorage.setItem('EXPERIENCE', JSON.stringify(experience));
  }, [experience]);

  function addPerson(fullname, dateofbirth, email, phone, location) {
    setPerson({
      fullname, dateofbirth, email, phone, location,
    });
  }

  function addEducation(institute, degree, startDate, endDate, location) {
    setEducation((currentEducation) => [...currentEducation, {
      institute, degree, startDate, endDate, location,
    }]);
  }

  function addPExperience(
    company,
    position,
    startDate,
    endDate,
    location,
  ) {
    setExperience((currentExperience) => [...currentExperience, {
      company,
      position,
      startDate,
      endDate,
      location,
    }]);
  }

  function clearResume() {
    setPerson({});
    setEducation([]);
    setExperience([]);
  }

  return (
    <>
      <button className="clear btn" onClick={clearResume}>Clear Resume</button>
      <div className="form-container">
        <PersonalForm addPerson={addPerson} />
        <EducationForm addEducation={addEducation} />
        <ExperienceForm addPExperience={addPExperience} />
      </div>
      <CurriculumVitae person={person} education={education} experience={experience} />
    </>
  );
}
