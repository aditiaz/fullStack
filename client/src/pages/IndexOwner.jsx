import { RoomsContext } from "../context/roomsContext";
import React, { useContext } from "react";
import { Navbars } from "../components";
import { Row, Container, Table } from "react-bootstrap";
import magnifiyIc from "../assets/magnifiyIc.svg";

export const IndexOwner = () => {
  const { users } = useContext(RoomsContext);
  const changeColor = (status) => {
    return status === "Approve" ? "success" : status === "Pending" ? "warning" : "danger";
  };
  //   console.log(users);
  return (
    <Container>
      <Navbars />;
      <Row style={{ marginTop: "15rem" }}>
        <Table>
          <thead>
            <tr>
              <th>No</th>
              <th>Users</th>
              <th>Type of Rent</th>
              <th>Bukti Transfer</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((e, i) => {
              return (
                <tr>
                  <td>{e.no}</td>
                  <td>{e.user}</td>
                  <td>{e.period}</td>
                  <td>{e.tfProf}</td>
                  <td className={`text-${changeColor(e.status)}`}>{e.status}</td>

                  <td>
                    <img src={magnifiyIc} alt="magnify" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default IndexOwner;
