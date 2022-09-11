import ExperienceForm from "./ExperienceForm";

export default function ExperienceOverview(props) {
  const onEdit = (e) => {
    props.editExperience(e.target.getAttribute('data-id'));
  }

  const onDelete = (e) => {
    props.deleteExperience(e.target.getAttribute('data-id'));
  }
  return (
    props.experienceList.map((experience) => {
      if(experience.showEdit) {
        return (
          <div key={experience.id}>
            <ExperienceForm experience={experience} submit={props.submit} />
          </div>
        );
      }
      return(
        <div key={experience.id} id="experienceEntry">
          <div>Company:</div>
          <div>{experience.company}</div>
          <div>Position:</div>
          <div>{experience.position}</div>
          <div>Tasks:</div>
          <div>{experience.taskings}</div>
          <div>Start date:</div>
          <div>{experience.start}</div>
          <div>End date:</div>
          <div>{experience.end}</div>
          <button data-id={experience.index} onClick={onEdit}>Edit</button>
          <button data-id={experience.index} onClick={onDelete}>Delete</button>
        </div>
      );
    })
  );
}