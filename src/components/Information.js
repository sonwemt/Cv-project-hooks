import { useState } from "react"
import "../styles/information.css";



export default function Information() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showForm, setShowForm] = useState(true);

  const onNameChange = (e) => {
    setFullname(e.target.value);
  }
  
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }
  
  const onPhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  }
  
  const onSubmitContactInfo = (e) => {
    e.preventDefault();
    setShowForm(false);
  }
  
  const onEditContactInfo = (e) => {
    e.preventDefault();
    setShowForm(true);
  }
  
  if(showForm) {
    return (
      <div id="contactInfoContainer">
        <form id="contactInfoForm" onSubmit={onSubmitContactInfo}>
          <label htmlFor="fullNameInput">Full Name: </label>
          <input type="text" id="fullNameInput" value={fullname} onChange={onNameChange}/>
          <label htmlFor="emailInput">Email: </label>
          <input type="email" id="emailInput" value={email} onChange={onEmailChange}/>
          <label htmlFor="phoneNumberInput">Phone Number: </label>
          <input type="number" id="phoneNumberInput" value={phoneNumber} onChange={onPhoneChange} />
          <button type="submit" className="submitButton" >Submit Info</button>
        </form>
      </div>
    );
  }
  return (
    <div id="contactInfoContainer">
      <form id="contactInfoForm" onSubmit={onEditContactInfo}>
        <div>Full Name: </div>
        <div>{fullname}</div>
        <div>Email: </div>
        <div>{email}</div>
        <div>Phone Number: </div>
        <div>{phoneNumber}</div>
        <button type="submit" className="editButton">Edit Info</button>
      </form>
    </div>
  )
}   