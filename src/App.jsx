import React, { useState } from 'react';
import PersonalForm from './Components/PersonalForm';
import EducationForm from './Components/EducationForm';
import ExperienceForm from './Components/ExperienceForm';

export default function App() {

  const [person, setPerson ] = useState({})
  const [education, setEducation ] = useState({})
  const [experience, setExperience] = useState({})
  


  function addPerson(fullname, email, phone, location) {
    setPerson ({fullname, email, phone, location})
  }

  function addEducation(institute, degree, startDate, endDate, location) {
    setEducation({institute, degree, startDate, endDate, location})
  }

  function addPExperience(company, position, startDate, endDate, location, description) {
    setExperience({company, position, startDate, endDate, location, description})
  }


  console.log(person)
  console.log(education)
  console.log(experience)


  return (
    <div className="container">
      <PersonalForm addPerson = {addPerson}/>
      <EducationForm addEducation = {addEducation}/>
      <ExperienceForm addPExperience={addPExperience}></ExperienceForm>
      
    </div>
  );
}
