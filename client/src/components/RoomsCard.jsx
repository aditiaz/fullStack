import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import "react-datepicker/dist/react-datepicker.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { API } from "../lib/_api";
import { useQuery } from "react-query";
// import { RoomsContext } from "../context/roomsContext";
import { useNavigate } from "react-router-dom";

export const RoomsCard = () => {
  // const { rooms } = useContext(RoomsContext);
  const navigate = useNavigate();

  // const { data: properties } = axios.get(`properties`);
  let { data: properties } = useQuery("propertiesCache", async () => {
    const response = await API.get("/properties");
    return response.data.data;
  });

  // console.log("data showed", properties);
  return (
    <Col size="lg" style={{ marginBlock: "1rem", marginInlineStart: "25rem" }}>
      <CardGroup
        className="gap-3 mx-3   d-flex justify-content-between"
        style={{ marginTop: "12rem" }}
      >
        {properties?.map((e, k) => {
          return (
            <Col xs={3} sm={3} style={{ width: "25rem" }}>
              <Card key={e.imageUrl}>
                {/* {e.amenities.map((amenity, k) => {
                  <span
                    key={k}
                    className="position-absolute fw-bold p"
                    style={{
                      padding: "4px",
                      width: "5.5rem",
                      backgroundColor: "white",
                      top: "20px",
                      left: "20px",
                      borderRadius: "5px",
                    }}
                    variant="primary"
                  >
                    {amenity}
                  </span>;
                })} */}
                {/* </div> */}
                <span
                  className="position-absolute fw-bold p"
                  style={{
                    padding: "4px",
                    width: "5.5rem",
                    backgroundColor: "white",
                    top: "20px",
                    left: "20px",
                    borderRadius: "5px",
                  }}
                  variant="primary"
                >
                  Furnished
                </span>
                <Card.Img
                  style={{ height: "30rem" }}
                  onClick={() => navigate(`detail/${e.id}`)}
                  variant="top"
                  src={`http://localhost:5000/uploads/${e.image}`}
                />
                <Card.Body>
                  <Card.Title>
                    Rp.{e.price.toLocaleString()} / {e.type_rent}
                  </Card.Title>
                  <Card.Text>
                    <p className="fw-bold">
                      {e.bedroom} beds,{e.bathroom} baths,{e.roomSize} sqft
                    </p>
                    <p className="text-secondary">
                      {e.city.name},{e.address}
                      {/* {e.amenities} */}
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </CardGroup>
    </Col>
  );
};
