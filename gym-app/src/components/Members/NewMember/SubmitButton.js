import React from "react";

function SubmitButton({handleFormSubmit, buttonName}){
    return (
        <button type="button" onClick={handleFormSubmit}>{buttonName}</button>
    );
}
export default SubmitButton;