import { useState } from "react";
import "../styles/experience.css";
import ExperienceOverview from "../components/ExperienceOverview";
import ExperienceForm from "./ExperienceForm";
import uniqid from "uniqid";

export default function Experience() {
    const [experienceList, setExperienceList] = useState([]);
    const [experience, setExperience] = useState({
      company: '',
      position: '',
      taskings: '',
      start: '',
      end: '',
      showEdit: false,
      index: false,
      id: uniqid(),
    });

  const editExperience = (index) => {
    const newArray = Array.from(experienceList);
    newArray[index].showEdit = true;
    setExperienceList(newArray);
  }

  const deleteExperience = (index) => {
    const newArray = Array.from(experienceList);
    newArray.splice(index, 1);
    for(let i = 0; i < newArray.length; i += 1) {
      newArray[i].index = i;
    }
    setExperienceList(newArray);
  }

  const onEditSubmit = (info) => {
    const newArray = Array.from(experienceList);
    const index = info.index;
    const newInfo = info;
    newInfo.showEdit = false;
    newArray.splice(index, 1, newInfo);
    setExperienceList(newArray);
  }


  const onExperienceSubmit = (info) => {
    const newInfo = info;
    newInfo.index = experienceList.length;
    setExperienceList(experienceList.concat(newInfo));
    setExperience({
        company: '',
        position: '',
        taskings: '',
        start: '',
        end: '',
        showEdit: false,
        index: false,
        id: uniqid(),
      });
  }

  return (
    <div id="experienceContainer">
      <h2 className="subheader">Experience</h2>
      <div id="experienceEntries">
        <ExperienceOverview
          experienceList={experienceList}
          editExperience={editExperience}
          deleteExperience={deleteExperience}
          submit={onEditSubmit}
        />
      </div>
      <div id="experienceMainForm">
        <ExperienceForm
          experience={experience}
          submit={onExperienceSubmit}
        />
      </div>
    </div>
  );
}