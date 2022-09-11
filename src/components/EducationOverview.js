import EducationForm from "./EducationForm";

export default function EducationOverview(props){

  const onEdit = (e) => {
    props.editEducation(e.target.getAttribute('data-id'));
  }

  const onDelete = (e) => {
    props.deleteEducation(e.target.getAttribute('data-id'));
  }

  return (
    props.educationList.map((education) => {
      if(education.showEdit) {
        return (
          <div key={education.id}>
            <EducationForm education={education} submit={props.submit} />
          </div>
        )
      }
      return(
      <div key={education.id} id="educationEntry">
        <div>School:</div>
        <div>{education.school}</div>
        <div>Type of study:</div>
        <div>{education.study}</div>
        <div>Start date:</div>
        <div>{education.start}</div>
        <div>End date:</div>
        <div>{education.end}</div>
        <button data-id={education.index} onClick={onEdit}>Edit</button>
        <button data-id={education.index} onClick={onDelete}>Delete</button>
      </div>
      )
    })
  );
}