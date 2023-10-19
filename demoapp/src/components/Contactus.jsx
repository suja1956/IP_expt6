import './Contactus.css';
import React, { useState } from 'react';
import DisplayMessage from './Displaymessage';
import { useNavigate } from "react-router-dom";
export default function Contactus() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate= useNavigate();

  const handleSubmit=(event)=>{
    event.preventDefault();
   
   const email = event.target.elements.email.value;
   const message = event.target.elements.message.value;
   setEmail(email);
  setMessage(message);
  navigate("/submit",{state:{email,message}});
  }
  return (
    <div>
        <hr />
        <div className='box1'>
<form onSubmit={handleSubmit}>
  <label htmlFor="">Email:</label>
  <input type="text" name="email"placeholder="Enter your E-mail..."/><br />

<label htmlFor="">Message:</label>
  <input type="text" name="message"placeholder="Enter your Message..."/>
  <button type='submit'>Submit</button>
</form>
{/* <DisplayMessage email={email} message={message}/> */}
        </div>
     
    </div>
  )
}
