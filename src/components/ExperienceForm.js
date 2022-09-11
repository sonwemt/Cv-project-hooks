import { useState } from "react";

export default function ExperienceForm(props) {
  const [company, setCompany] = useState(props.experience.company);
  const [position, setPosition] = useState(props.experience.position);
  const [taskings, setTaskings] = useState(props.experience.taskings);
  const [start, setStart] = useState(props.experience.start);
  const [end, setEnd] = useState(props.experience.end);


  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  }

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  }

  const handleTaskingsChange = (e) => {
    setTaskings(e.target.value);
  }

  const handleStartChange = (e) => {
    setStart(e.target.value);
  }

  const handleEndChange = (e) => {
    setEnd(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const submitInfo = {
        company: company,
        position: position,
        taskings: taskings,
        start: start,
        end: end,
        showEdit: props.experience.showEdit,
        index: props.experience.index,
        id: props.experience.id,
    };
    props.submit(submitInfo);
  }
    
  return(
    <form className="experienceForm" onSubmit={handleSubmit}>
      <label htmlFor="companyNameInput">Name of company: </label>
      <input type="text" id="companyNameInput" value={company} onChange={handleCompanyChange} />

      <label htmlFor="positionInput">Position: </label>
      <input type="text" id="positionInput" value={position} onChange={handlePositionChange} />

      <label htmlFor="taskInput">Tasks: </label>
      <input type="text" id="taskInput" value={taskings} onChange={handleTaskingsChange} />

      <label htmlFor="experinceStart">Start date: </label>
      <input type="date" id="experienceStart" value={start} onChange={handleStartChange} />

      <label htmlFor="experienceEnd">End date: </label>
      <input type="date" id="experienceEnd" value={end} onChange={handleEndChange} />

      <button type="submit">{!props.experience.showEdit ? 'Add' : 'Update'}</button>
    </form>
  );
}
