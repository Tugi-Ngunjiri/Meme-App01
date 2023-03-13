import React from "react";
import { useState} from "react";

const [errorMessages,  SetErrorMessages] = useState({});
const [isSubmitted,  setSubmitted] = useState(false);

// To generate code for error message
const renderErrorMessage= (name) =>
name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
)

// Code For login form
const renderForm = (
    <div className="form">
<form>
<div  className="input-container">
<label>Username </label>
<input type="text" name="uname" required />
{renderErrorMessage("uname")}
</div>
<div className="input-container">
<label>Password</label>
{renderErrorMessage("pass")}
</div>
<div className="button-container"> 
<input type="submit" />
</div>
</form>
 </div>
)


const handleSubmit= (event) =>{
    //Prevent page reload
    event.preventDefault();
};

<form onSubmit={handleSubmit}></form>