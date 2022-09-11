import { useState } from "react";

export default function EducationForm(props) {
    
  const [school, setSchool] = useState(props.education.school);
  const [study, setStudy] = useState(props.education.study);
  const [start, setStart] = useState(props.education.start);
  const [end, setEnd] = useState(props.education.end);
  
  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
  }

  const handleStudyChange = (e) => {
    setStudy(e.target.value);  
  }

  const handleStartChange = (e) => {
    setStart(e.target.value);
  }

  const handleEndChange = (e) => {
    setEnd(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitInfo = {
      school: school,
      study: study,
      start: start,
      end: end,
      showEdit: props.education.showEdit,
      index: props.education.index,
      id: props.education.id,
    };
    props.submit(submitInfo);
  }

  return(
    <form className="educationForm" onSubmit={handleSubmit}>
      <label htmlFor="schoolNameInput">Name of school: </label>
      <input type="text" id="schoolNameInput" value={school} onChange={handleSchoolChange} />

      <label htmlFor="studyInput">Type of study: </label>
      <input type="text" id="studyInput" value={study} onChange={handleStudyChange} />

      <label htmlFor="studyStart">Start date: </label>
      <input type="date" id="studyStart" value={start} onChange={handleStartChange} />

      <label htmlFor="studyEnd">End date: </label>
      <input type="date" id="studyEnd" value={end} onChange={handleEndChange} />

      <button type="submit">{!props.education.showEdit ? 'Add' : 'Update'}</button>
    </form>
  );
}