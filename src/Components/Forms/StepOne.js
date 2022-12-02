import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

const StepOne = ({ nextStep, handleFormData, values }) => {
const [error, setError] = useState(false);

const submitFormData = (e) => {
    e.preventDefault();
    if (
      validator.isEmpty(values.email) ||
      validator.isEmpty(values.password)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <h3>Form 1</h3>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <input
                type="email"
                name="email"
                defaultValue={values.email}
                placeholder="Enter Email id"
                onChange={handleFormData("email")}
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
              <Form.Label>Password</Form.Label>
              <input
                type="password"
                name="password"
                defaultValue={values.password}
                placeholder="Enter Password"
                onChange={handleFormData("password")}
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
            <Button variant="primary" type="submit">
              Next
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;
