import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

const StepThree = ({ nextStep, handleFormData, prevStep, values }) => {
  const [error, setError] = useState(false);
  const [isSent, setIsSent] = useState(false);
  
  
  const submitFormData = (e) => {
    e.preventDefault();
    fetch(`http://localhost:1000/savedata/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
    body: JSON.stringify({ values })
    }).then(() => setIsSent(true))
     
    if (validator.isEmpty(values.code) || 
     validator.isEmpty(values.phone)||
     validator.isEmpty(values.terms)) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
        <h3>Form 3</h3>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>CountryCode</Form.Label>
              <select name="code" onChange={handleFormData("code")} style={{ border: error ? "2px solid red" : "" }} required>
                 <option value="">Select...</option>
                  <option value="+91">IND</option>
                  <option value="+1">US</option>
              </select>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>

              <input 
              type="tel" 
              name="phone"
              maxLength={10}
              onChange={handleFormData("phone")}
              style={{ border: error ? "2px solid red" : "" }}
              required
           />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>


            <div className="inline-sec">
             <span> 
                <input
                type="checkbox"
                name="terms"
                value={"yes"}
                required
                onChange={handleFormData("terms")}
                style={{ border: error ? "2px solid red" : "" }}
              />AcceptTerms And Condition</span>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </div>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="primary" onClick={prevStep}>
                Back
              </Button>

              <Button variant="primary" type="submit">
                Save
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepThree;
