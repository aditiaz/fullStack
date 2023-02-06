import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BsCalendar3 } from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useContext } from "react";
import { Calendar } from "./Calendar";
import { RoomsContext } from "../context/roomsContext";

export const SideBar = () => {
  const { filterPeriod } = useContext(RoomsContext);

  const [buttons, setButtons] = useState("1");
  const [button, setButton] = useState("1");
  const [btnTime, setBtnTime] = useState("month");
  return (
    <Col className="col-3  fixed-top " style={{ marginTop: "7.5rem", height: "40rem" }}>
      <Col className="mx-5 ">
        <Form>
          <h4>Type of Rent</h4>
          <Col className="d-flex justify-content-between mt-3">
            <Button
              style={{
                fontSize: "1.3rem",
                backgroundColor: "rgba(196, 196, 196, 0.25)",
                border: "none",
                color: "black",
                fontWeight: "bold",
              }}
              className={btnTime === "day" ? "py-2 w-25 click" : "py-2 w-25 noClick"}
              onClick={() => {
                setBtnTime("day");
                filterPeriod("Day");
              }}
              // onClick={filterPeriod("Day")}
            >
              Day
            </Button>
            <Button
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.25)",
                fontSize: "1.2rem",
                color: "black",
                fontWeight: "bold",
                border: "none",
              }}
              className={btnTime === "month" ? "py-2 w-25 click" : "py-2 w-25 noClick"}
              onClick={() => setBtnTime("month")}
              size="md"
            >
              Month
            </Button>
            <Button
              style={{
                fontSize: "1.7rem",
                border: "none",
                backgroundColor: "rgba(90, 87, 171, 1)",
              }}
              className={btnTime === "year" ? "py-2 w-25 click" : "py-2 w-25 noClick"}
              onClick={() => setBtnTime("year")}
              size="md"
            >
              Year
            </Button>
          </Col>
          {/* button end */}
          <h4 className="mt-3">Date</h4>
          <Row style={{ width: "", height: "" }} className="mt-1   ">
            <Col className="col-2  mt-1 border-4 border-dark-subtle">
              <BsCalendar3 className="d-flex mx-auto my-auto" size={20} />
            </Col>

            <Col className="col-10  d-flex my-auto">
              <Calendar />
            </Col>
          </Row>
          <h4 className="my-3">Property Room</h4>
          {/* BedRoom */}
          <h6 className="text-secondary my-3">Bed Room</h6>
          <Row className="d-flex justify-content-between">
            <Button
              className={"1" === buttons ? "click" : "noClick"}
              style={{
                border: "none",
                fontWeight: "bold",
                fontSize: "1.2rem",
                width: "3.5rem",
                height: "2.6rem",
              }}
              onClick={() => setButtons("1")}
            >
              1
            </Button>
            <Button
              className={"2" === buttons ? "click" : "noClick"}
              style={{
                border: "none",
                fontWeight: "bold",
                fontSize: "1.2rem",
                width: "3.5rem",
                height: "2.6rem",
                color: "black",
                backgroundColor: "rgba(196, 196, 196, 0.25)",
              }}
              onClick={() => setButtons("2")}
            >
              2
            </Button>
            <Button
              className={"3" === buttons ? "click" : "noClick"}
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                border: "none",
                width: "3.5rem",
                height: "2.6rem",
                color: "black",
                // backgroundColor: "rgba(196, 196, 196, 0.25)",
              }}
              onClick={() => setButtons("3")}
            >
              3
            </Button>
            <Button
              className={"4" === buttons ? "click" : "noClick"}
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                border: "none",
                width: "3.5rem",
                height: "2.6rem",
                color: "black",
                backgroundColor: "rgba(196, 196, 196, 0.25)",
              }}
              onClick={() => setButtons("4")}
            >
              4
            </Button>
            <Button
              className={"5" === buttons ? "click" : "noClick"}
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                border: "none",
                width: "3.5rem",
                height: "2.6rem",
                color: "black",
                backgroundColor: "rgba(196, 196, 196, 0.25)",
              }}
              onClick={() => setButtons("5")}
            >
              5+
            </Button>
          </Row>
          {/* BedRoom End*/}
          <h6 className="text-secondary my-3">Bath Room</h6>
          <Row className="d-flex justify-content-between">
            <Button
              className={"1" === button ? "click" : "noClick"}
              style={{
                fontWeight: "bold",
                color: "black",
                backgroundColor: "rgba(196, 196, 196, 0.25)",
                fontSize: "1.2rem",
                border: "none",
                width: "3.5rem",
                height: "2.6rem",
              }}
              onClick={() => setButton("1")}
            >
              1
            </Button>
            <Button
              className={"2" === button ? "click" : "noClick"}
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                border: "none",
                width: "3.5rem",
                height: "2.6rem",
                backgroundColor: "rgba(90, 87, 171, 1)",
              }}
              onClick={() => setButton("2")}
            >
              2
            </Button>
            <Button
              className={"3" === button ? "click" : "noClick"}
              style={{
                fontWeight: "bold",
                color: "black",
                backgroundColor: "rgba(196, 196, 196, 0.25)",
                fontSize: "1.2rem",
                border: "none",
                width: "3.5rem",
                height: "2.6rem",
              }}
              onClick={() => setButton("3")}
            >
              3
            </Button>
            <Button
              className={"4" === button ? "click" : "noClick"}
              style={{
                color: "black",
                fontWeight: "bold",
                backgroundColor: "rgba(196, 196, 196, 0.25)",
                fontSize: "1.2rem",
                border: "none",
                width: "3.5rem",
                height: "2.6rem",
              }}
              onClick={() => setButton("4")}
            >
              4
            </Button>
            <Button
              className={"5" === button ? "click" : "noClick"}
              style={{
                color: "black",
                fontWeight: "bold",
                backgroundColor: "rgba(196, 196, 196, 0.25)",
                fontSize: "1.2rem",
                border: "none",
                width: "3.5rem",
                height: "2.6rem",
              }}
              onClick={() => setButton("5")}
            >
              5+
            </Button>
          </Row>
          {/* Bath Room end */}
          {/* Amneties */}
          <h4 className="my-3">Amenities</h4>
          <Row className="row-cols-1">
            <Col className="d-flex justify-content-between ">
              <h7 className="text-secondary ">Furnished</h7>
              <Form.Check size="lg" />
            </Col>
            <Col className="d-flex justify-content-between ">
              <h7 className="text-secondary ">Pet Allowed</h7>
              <Form.Check size="lg" />
            </Col>
            <Col className="d-flex justify-content-between ">
              <h7 className="text-secondary ">Share Accomodation</h7>
              <Form.Check size="lg" />
            </Col>
          </Row>
          {/* Amneties End */}
          <h5 className="my-1">Budget</h5>

          <Row>
            <Col>
              <Form.Group as={Row} className=" d-flex " controlId="formHorizontalEmail">
                <Form.Label column sm={5}>
                  <h6>Less than IDR.</h6>
                </Form.Label>
                <Col sm={7}>
                  <Form.Control size="md" type="text" className="bg-light" />
                </Col>
                <Col className="d-flex justify-content-end mt-3">
                  <Button
                    className="px-5"
                    size="lg"
                    style={{
                      fontSize: "1.3rem",
                      backgroundColor: "rgba(90, 87, 171, 1)",
                      border: "none",
                    }}
                  >
                    Apply
                  </Button>
                </Col>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Col>
    </Col>
  );
};
