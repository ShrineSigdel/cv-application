import React, { useState } from 'react';
import PersonalForm from './Components/PersonalForm';
import EducationForm from './Components/EducationForm';
import ExperienceForm from './Components/ExperienceForm';
import CurriculumVitae from './Components/CurriculumVitae';

export default function App() {
  const [person, setPerson] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

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

  return (
    <>
      <div className="form-container">
        <PersonalForm addPerson={addPerson} />
        <EducationForm addEducation={addEducation} />
        <ExperienceForm addPExperience={addPExperience} />
      </div>
      <CurriculumVitae person={person} education={education} experience={experience} />
    </>
  );
}
