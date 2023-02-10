// import Button from "react-bootstrap/Button";
import { Modal, Button, Form, Alert } from "react-bootstrap";
// import Form from "react-bootstrap/Form";
import { RoomsContext } from "../context/roomsContext";
import { React, useContext, useState } from "react";
import { SignIn } from "./Sign-in";
import { useMutation } from "react-query";
import { API } from "../lib/_api";

export const SignUp = (props) => {
  const { setModalSignIn, setModalSignUp, modalSignUp, modalSignIn } = useContext(RoomsContext);
  // const[setModalSignUp,modalSignUp]

  const { handleSignUpChange, handleSignUpSubmit } = useContext(RoomsContext);
  // console.log(localSignUpForm2);
  const [message, setMessage] = useState(null);
  const listAs = [{ value: "" }, { value: "Tenant" }, { value: "Owner" }];
  const genders = [{ value: "" }, { value: "Man" }, { value: "Woman" }];
  const [formSubmit, setFormSubmit] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    listAs: "",
    gender: "",
    phone: "",
    address: "",
  });
  const { fullname, username, email, password, list_as_id, gender, phone, address } = formSubmit;
  const handleChange = (e) => {
    setFormSubmit({
      ...formSubmit,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify(formSubmit);
      const response = await API.post("/register", body, config);
      setFormSubmit({
        fullname: "",
        username: "",
        email: "",
        password: "",
        listAs: "",
        gender: "",
        phone: "",
        address: "",
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }

    console.log(formSubmit);
  });

  return (
    <Modal
      className="d-flex justifycontent-center w-25 h-"
      {...props}
      size="xs"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <h2 className="d-flex justify-content-center my-3">Sign Up</h2>
      {message && message}

      <Modal.Body style={{ height: "35rem", overflow: "hidden", overflow: "auto" }}>
        <Form onSubmit={(e) => handleSubmit.mutate(e)} className="fw-bold">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              id="fullname"
              name="fullname"
              type="text"
              rows={1}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={handleChange}
              id="username"
              name="username"
              type="text"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={handleChange} id="email" name="email" type="email" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              id="password"
              name="password"
              type="password"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>List As</Form.Label>
            <Form.Select onChange={handleChange} id="listAs" name="listAs" type="text" autoFocus>
              {listAs.map((e) => {
                return <option>{e.value}</option>;
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Gender</Form.Label>
            <Form.Select onChange={handleChange} id="gender" name="gender" type="text" autoFocus>
              {genders.map((e) => {
                return <option>{e.value}</option>;
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone</Form.Label>
            <Form.Control onChange={handleChange} id="phone" name="phone" type="text" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={handleChange}
              id="address"
              name="address"
              type="text"
              style={{ resize: "none" }}
              autoFocus
            />
          </Form.Group>

          <Button
            type="submit"
            className="w-100 click"
            style={{ border: "none" }}
            onClick={() => {
              {
                setModalSignUp(false);
              }
            }}
          >
            Sign Up
          </Button>
        </Form>
        <h6 className="d-flex justify-content-center text-secondary my-3">
          Already have an account? click &nbsp;
          <p
            onClick={() => {
              {
                setModalSignIn(true);
                setModalSignUp(false);
              }
            }}
            className="nav-link fw-bold"
            style={{ cursor: "pointer" }}
          >
            Here
          </p>
        </h6>
      </Modal.Body>
    </Modal>
  );
};
