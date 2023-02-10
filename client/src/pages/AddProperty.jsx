import React, { useState } from "react";
import { Navbars } from "../components";
import { Col, Form, Container, Button, Card, Alert } from "react-bootstrap";
import { API, setAuthToken } from "../lib/_api";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

export const AddProperty = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    name_property: "",
    city: "",
    address: "",
    price: "",
    type_of_rent: "",
    amenities: [],
    bedroom: "",
    bathroom: "",
    sqf: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let newAmenities = [...form.amenities];
      if (checked) {
        newAmenities.push(value);
      } else {
        newAmenities = newAmenities.filter((amen) => amen !== value);
      }
      setForm({ ...form, amenities: newAmenities });
    } else {
      setForm({ ...form, [name]: type === "file" ? e.target.files : e.target.value });
    }

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      console.log("ini data blob", url);
      setPreview(url);
    }
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      console.log("ini data productmu", form);
      const formData = new FormData();
      formData.append("name_property", form.name);
      formData.append("city", form.city_id);
      formData.append("address", form.address);
      formData.append("price", form.price);
      formData.append("amenities", JSON.stringify(form.amenities));
      formData.append("type_of_rent", form.type_of_rent);
      formData.append("bedroom", form.bedroom);
      formData.append("bathroom", form.bathroom);
      formData.append("sqf", form.sqf);
      formData.append("description", form.description);
      formData.append("image", form.image[0]);

      const response = await API.post("/addproperty", formData);

      console.log("berhasil menambahkan product", response);
      console.log(form.amenities);
      if (response) {
        navigate("/");
      }
    } catch (err) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Unauthorized
        </Alert>
      );
      setMessage(alert);
      console.log("gagal upload product", err);
      console.log(form.amenities);
    }
  });
  return (
    <Container className="">
      <Navbars />
      <Form
        onSubmit={(e) => handleSubmit.mutate(e)}
        className="fw-bold"
        style={{ marginTop: "150px" }}
      >
        <Form.Group name="name" className="mb-3">
          <Form.Label>Name Property</Form.Label>
          <Form.Control
            onChange={handleChange}
            id="name_property"
            name="name_property"
            value={form.name}
            type="text"
            autoFocus
          />
        </Form.Group>
        <Card.Img src={preview} />
        <input type="file" id="upload" name="image" hidden onChange={handleChange} />
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center", marginBlock: "2rem" }}
        >
          <label style={{ cursor: "pointer" }} for="upload" className="label-file-add-product">
            Upload file
          </label>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Select
            onChange={handleChange}
            id="city"
            name="city"
            value={form.city_id}
            type="text"
            autoFocus
          >
            <option value="">-</option>
            <option value="Jakarta">Jakarta</option>
            <option value="Bandung">Bandung</option>
            <option value="Medan">Medan</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            onChange={handleChange}
            as="textarea"
            rows={3}
            id="address"
            name="address"
            value={form.address}
            type="text"
            style={{ resize: "none" }}
            autoFocus
          />
        </Form.Group>
        <Form.Group name="sqf" className="mb-3">
          <Form.Label>Sqf</Form.Label>
          <Form.Control
            onChange={handleChange}
            id="sqf"
            name="sqf"
            value={form.sqf}
            type="text"
            autoFocus
          />
        </Form.Group>
        <Form.Group name="price" className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            onChange={handleChange}
            id="price"
            name="price"
            value={form.price}
            type="text"
            autoFocus
          />
        </Form.Group>
        <Form.Group name="type_of_rent" className="mb-3">
          <Form.Label>Type of Rent</Form.Label>
          <Form.Select
            onChange={handleChange}
            id="type_of_rent"
            value={form.type_of_rent}
            name="type_of_rent"
            type="text"
            autoFocus
          >
            <option>-</option>
            <option value="Day">Day</option>
            <option value="Week">Week</option>
            <option value="Month">Month</option>
            <option value="Year">Year</option>
          </Form.Select>
        </Form.Group>
        <Form.Group name="amenities" className="mb-3">
          <Form.Label>Amenities</Form.Label>
          <div className="d-flex gap-5" style={{ fontWeight: "500", fontSize: "1.2rem" }}>
            <Form.Check
              onChange={handleChange}
              checked={form.amenities.includes("Furnished")}
              value="Furnished"
              type="checkbox"
              id="Furnished"
              label="Furnished"
              name="Furnished"
            />
            <Form.Check
              onChange={handleChange}
              checked={form.amenities.includes("Pet Allowed")}
              type="checkbox"
              id="Pet Allowed"
              label="Pet Allowed"
              name="Pet Allowed"
              value="Pet Allowed"
            />
            <Form.Check
              onChange={handleChange}
              checked={form.amenities.includes("Shared Accomodation")}
              type="checkbox"
              // id="shared-accomodation"
              id="Shared Accomodation"
              label="Shared Accomodation"
              name="Shared Accomodation"
              value="Shared Accomodation"
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Bed Room</Form.Label>
          <Form.Select id="bedroom" onChange={handleChange} name="bedroom" type="text" autoFocus>
            <option value="">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Bath Room</Form.Label>
          <Form.Select id="bathroom" onChange={handleChange} name="bathroom" type="text" autoFocus>
            <option value="">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
        <Form.Group name="description" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={handleChange}
            id="description"
            name="description"
            value={form.description}
            type="text"
            autoFocus
          />
        </Form.Group>

        {message && message}
        <Col className="d-flex mb-5 justify-content-center">
          <Button type="submit" className=" click" style={{ border: "none", width: "15rem" }}>
            Save
          </Button>
        </Col>
      </Form>
    </Container>
  );
};
