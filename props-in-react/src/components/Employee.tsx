import { log } from "console";
import React from "react";

type employee_props = {
  name: string;
  designation: string;
  age: number;
  marital_status?: boolean;
  //union of string literal
  feedback:"Good"|"Average"|"Best"
};

function Employee(props: employee_props) {


  return (
    <div>
      <h1>Welcome To Cybage</h1>
      <h3>
        Name: {props.name}
        <br />
        Designation: {props.designation}
        <br />
        Age: {props.age}<br/>

        marital Status: {(props.marital_status)? "Married" : "Unmarried"}<br />
        {/* Marital_Status: {props.marital_status} */}

        FeedBack: {props.feedback}
      </h3>

      <input type="text" />
    </div>
  );
}

export default Employee;
