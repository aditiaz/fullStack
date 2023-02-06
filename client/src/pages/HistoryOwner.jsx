import { Table, Container, Row, Col } from "react-bootstrap";
import { RoomsContext } from "../context/roomsContext";
import React, { useContext } from "react";
import { Navbars } from "../components";
import dotOutLine from "../assets/dotOutLine.svg";
import dotFill from "../assets/dotFill.svg";
import lineBooking from "../assets/lineBooking.svg";
import Logo from "../assets/Logo.svg";
import Qr from "../assets/qr.svg";

export const HistoryOwner = () => {
  const { rooms } = useContext(RoomsContext);
  const invoices = rooms;
  const getData = JSON.parse(localStorage.getItem("Date"));
  const getProfile = JSON.parse(localStorage.getItem("UserSignUp"));
  console.log(getProfile);
  return (
    <>
      <Navbars />
      <Container style={{ marginTop: "6rem" }}>
        {invoices.map((e, i) => {
          return (
            <Row style={{ marginBlock: ".5rem" }}>
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
                  <div
                    className="mx-3"
                    style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
                  >
                    <h2 className="p-3 text-center fw-bold">Invoice</h2>
                    <h3>{getData.check_in}</h3>
                  </div>
                </div>
                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                  <div>
                    <h3 className="md-5">{e.roomName}</h3>
                    <Col md={8}>
                      <p>
                        {e.roomStreetAddress},{e.districtAddress},{e.townAddress}
                      </p>
                      <div
                        className="w-50  align-middle"
                        style={{ backgroundColor: "rgba(60, 247, 30, 0.3", height: "2rem" }}
                      >
                        <p
                          className="text-center fw-bold"
                          style={{ color: "rgba(60, 247, 30, 1)", fontSize: "1rem" }}
                        >
                          Approve
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
                          <p style={{ color: "grey" }}></p>
                          <h5>Check-Out</h5>
                          <p style={{ color: "grey" }}></p>
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
                      <p style={{ color: "grey" }}>{e.period}</p>
                    </div>
                  </div>
                  <div>
                    <div
                      className="d-flex border border-4 border-dark"
                      style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src={Qr} alt="" style={{ width: 150, height: "auto" }} />
                    </div>
                    <h7 className="text-secondary text-center d-flex w-100 justify-content-center">
                      TCK0101
                    </h7>
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
                      <td style={{ color: "grey" }}>sui</td>
                      <td style={{ color: "grey" }}>sui</td>
                      <td style={{ color: "grey" }}>sui</td>
                      <td style={{ fontWeight: "bold" }}>Long Time rent</td>
                      <td>:</td>
                      <td style={{ fontWeight: "bold" }}>1 Year</td>
                    </tr>
                    <tr>
                      <td colSpan={5} style={{ fontWeight: "bold" }}>
                        Total
                      </td>
                      <td>:</td>
                      <td style={{ fontWeight: "bold", color: "green" }}> Rp.3.800.000</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Row>
          );
        })}
      </Container>
    </>
  );
};
