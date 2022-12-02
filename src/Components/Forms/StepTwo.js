import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";


const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  const [error, setError] = useState(false);
  

  const submitFormData = (e) => {
    e.preventDefault();
    
    if (validator.isEmpty(values.firstName) || 
      validator.isEmpty(values.lastName) || 
      validator.isEmpty(values.address)) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
        <h3>Form 2</h3>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>FirstName</Form.Label>
              <input
                type="text"
                maxLength={50}
                minLength={2}
                name="firstName"
                placeholder="FirstName"
                onChange={handleFormData("firstName")}
                style={{ border: error ? "2px solid red" : "" }}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>LastName</Form.Label>
              <input
                type="text"
                name="lastName"
                placeholder="LastName"
                onChange={handleFormData("lastName")}
                style={{ border: error ? "2px solid red" : "" }}
              />

              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <textarea
              placeholder="Address"
              name="address"
              minLength={10}
              onChange={handleFormData("address")}
              style={{ border: error ? "2px solid red" : "" }}
              />
             
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="primary" onClick={prevStep}>
                Back
              </Button>

              <Button variant="primary" type="submit">
                Next
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepTwo;
