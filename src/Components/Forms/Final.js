import React from "react";
import { Card } from "react-bootstrap";


const Final = ({ values }) => {

    //destructuring the object from values
             
  const { email,password, firstName,lastName,address,phone,code } = values;
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <p>
            <strong>Email :</strong> {email}{" "}
          </p>
          <p>
            <strong>Password :</strong> {password}{" "}
          </p>
          <p>
            <strong>First Name :</strong> {firstName}{" "}
          </p>
          <p>
            <strong>Last Name :</strong> {lastName}{" "}
          </p>
          <p>
            <strong>Address :</strong> {address}{" "}
          </p>
          <p>
            <strong>CountryCode :</strong> {+code}{" "}
          </p>
          <p>
            <strong>Phone :</strong> {phone}{" "}
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default Final;
