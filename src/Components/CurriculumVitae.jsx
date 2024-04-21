import React from 'react';
import PersonalDetails from './PersonalDetails';
import EducationalDetails from './EducationalDetails';
import ExperienceDetails from './ExperienceDetails';

export default function CurriculumVitae({ person, education, experience }) {
  return (
    <div className="curriculum-vitae">
      <PersonalDetails {...person} />
      <EducationalDetails education={education} />
      <ExperienceDetails experience={experience} />
    </div>
  );
}
