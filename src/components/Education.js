import { useState } from "react";
import "../styles/education.css";
import EducationOverview from '../components/EducationOverview';
import EducationForm from "./EducationForm";
import uniqid from "uniqid";

export default function Education() {
  const [educationList, setEducationList] = useState([]);
  const [education, setEducation] = useState({
      school: '',
      study: '',
      start: '',
      end: '',
      showEdit: false,
      index: false,
      id: uniqid(),
  });

  const editEducation = (index) => {
    const newArray = Array.from(educationList);
    newArray[index].showEdit = true;
    setEducationList(newArray);
  }

  const deleteEducation = (index) => {
    const newArray = Array.from(educationList);
    newArray.splice(index, 1);
    for(let i = 0; i < newArray.length; i += 1) {
      newArray[i].index = i;
    }
    setEducationList(newArray);
  }

  const onEditSubmit = (info) => {
    const newArray = Array.from(educationList);
    const index = info.index;
    const newInfo = info;
    newInfo.showEdit = false;
    newArray.splice(index, 1, newInfo);
    setEducationList(newArray);
  }

  const onEducationSubmit = (info) => {
    const newInfo = info;
    newInfo.index = educationList.length;
    setEducationList(educationList.concat(newInfo));
    setEducation({
      school: '',
      study: '',
      start: '',
      end: '',
      showEdit: false,
      index: false,
      id: uniqid(),
    });
  }

  return (
    <div id="educationContainer">
      <h2 className="subheader">Education</h2>
      <div id="educationEntries">
        <EducationOverview
          educationList={educationList}
          editEducation={editEducation}
          deleteEducation={deleteEducation}
          submit={onEditSubmit}
        />
      </div>
      <div id="educationMainForm">
        <EducationForm
          education={education}
          submit={onEducationSubmit}
        />
      </div>
    </div>
  );
}