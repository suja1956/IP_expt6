import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
export default function DisplayMessage(props) {
    const navigate = useNavigate()
    const location = useLocation();
    const handlebutton=()=>{
        navigate("/");
    }
  return (
    <div>
      <h2>Received Email and Message:</h2>
      {/* <p>Email: {props.email}</p>
      <p>Message: {props.message}</p> */}
      <p>Email: {location.state.email}</p>
      <p>Message: {location.state.message}</p>
      <button onClick={handlebutton}>Go back</button>
    </div>
  );
}
