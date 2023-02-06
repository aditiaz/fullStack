import { Table, Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { RoomsContext } from "../context/roomsContext";
import React, { useContext } from "react";
import { Navbars } from "../components";
import dotOutLine from "../assets/dotOutLine.svg";
import dotFill from "../assets/dotFill.svg";
import lineBooking from "../assets/lineBooking.svg";
import Logo from "../assets/Logo.svg";

export const InvoiceDetail = () => {
  const { rooms } = useContext(RoomsContext);
  //   const { room } = useParams();
  const detailRoom = rooms[1];

  const getData = JSON.parse(localStorage.getItem("Date"));
  const getProfile = JSON.parse(localStorage.getItem("UserSignUp"));
  return (
    <Container>
      <Navbars />
      <Row style={{ marginTop: "15rem" }}>
        <div
          style={{
            marginTop: 30,
            boxShadow: "0px 0px 1px",
            borderRadius: 10,
            padding: "0px 30px 0px 30px",
          }}
        >
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <div className="p-4">
              <img src={Logo} width={110} alt="" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h2 className="p-3">Booking</h2>
              <h5>{getData.check_in}</h5>
            </div>
          </div>
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <div>
              <h3 className="md-5">{detailRoom?.roomName}</h3>
              <Col md={8}>
                <p>
                  {detailRoom?.roomStreetAddress},{detailRoom?.districtAddress},
                  {detailRoom?.townAddress}
                </p>
                <div
                  className=" align-middle"
                  style={{
                    height: "2rem",
                    backgroundColor: "rgba(255, 153, 0, 0.1)",
                    width: "15rem",
                  }}
                >
                  <p className="text-center" style={{ fontSize: "1.2rem", color: "#FF9900" }}>
                    Waiting to Approve
                  </p>
                </div>
              </Col>
              <img src="/img/prove.svg" alt="" />
            </div>
            <div style={{ marginRight: -80, marginTop: 10 }}>
              <img src="/img/prove.svg" alt="" />
            </div>
            <div>
              <Col st md={15}>
                <div className="d-flex gap-3">
                  <div className="d-grid gap-1 " style={{ marginTop: "-2rem" }}>
                    <img
                      className="d-flex justify-content-center"
                      style={{
                        width: "2rem",
                        height: "2rem",
                        color: "black",
                      }}
                      src={dotOutLine}
                      alt="dot"
                    />

                    <img
                      className="bg-primary"
                      src={lineBooking}
                      alt="line"
                      style={{ marginInline: ".8rem", height: "7rem" }}
                    />
                    <img
                      className="d-flex justify-content-center"
                      style={{
                        width: "2rem",
                        height: "2rem",
                        color: "black",
                      }}
                      src={dotFill}
                      alt="dot"
                    />
                  </div>
                  <div>
                    <h5>Check-In</h5>
                    <p style={{ color: "grey" }}>{getData?.check_in}</p>
                    <h5>Check-Out</h5>
                    <p style={{ color: "grey" }}>{getData?.check_out}</p>
                  </div>
                </div>
              </Col>
            </div>
            <div>
              <div>
                <h5>Amenities</h5>
                <p style={{ color: "grey" }}>Furnished</p>
              </div>
              <div>
                <h5>Type of Rent</h5>
                <p style={{ color: "grey" }}>{detailRoom?.period}</p>
              </div>
            </div>
            <div>
              <div
                className="d-flex border border-4 border-dark"
                style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}
              >
                <img
                  src={require("../assets/nota.png")}
                  alt=""
                  style={{ width: 150, height: "auto" }}
                />
              </div>
              <h7 className="text-secondary">Uploaded payment proof</h7>
            </div>
          </div>
          <Table>
            <thead>
              <tr>
                <th>No</th>
                <th>Full Name</th>
                <th>Gender</th>
                <th>Phone</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td style={{ color: "grey" }}>{getProfile?.fullname}</td>
                <td style={{ color: "grey" }}>{getProfile?.gender}</td>
                <td style={{ color: "grey" }}>{getProfile?.phone}</td>
                <td style={{ fontWeight: "bold" }}>Long Time rent</td>
                <td>:</td>
                <td style={{ fontWeight: "bold" }}>1 Year</td>
              </tr>
              <tr>
                <td colSpan={5} style={{ fontWeight: "bold" }}>
                  Total
                </td>
                <td>:</td>
                <td style={{ fontWeight: "bold", color: "red" }}> Rp.3.800.000</td>
              </tr>
            </tbody>
          </Table>
          <Col className="w-100 d-flex gap-3 justify-content-end my-3">
            <Button variant="danger">Cancel</Button>
            <Button variant="success">Approve</Button>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default InvoiceDetail;
