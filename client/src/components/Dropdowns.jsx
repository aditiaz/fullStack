import Dropdown from "react-bootstrap/Dropdown";
import { BsPerson, BsCalendar3, BsListUl } from "react-icons/bs";
import { RiNewspaperLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import profilePic from "../assets/profile.jpg";
import React, { useEffect } from "react";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import Cabin from "../assets/cabinIc.svg";

const DropdownNav = () => {
  const navigate = useNavigate();
  const roles = localStorage.Roles;

  return (
    <Dropdown
      style={{ color: "white", backgroundColor: "white", border: "white" }}
      id="dropdown-basic-button"
      title="Dropdown button"
    >
      <DropdownToggle variant="white">
        <img
          style={{ width: "3.5rem", borderRadius: "50%", backgroundColor: "black" }}
          src={profilePic}
          alt="pp"
        />
      </DropdownToggle>
      <DropdownMenu>
        <Dropdown.Item
          onClick={() => {
            navigate("/profile/");
          }}
          className="dropDownNav"
        >
          <BsPerson />
          <span style={{ color: "black" }}> Profile</span>
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            navigate("/booking/");
          }}
          className="dropDownNav"
        >
          <RiNewspaperLine />
          <span style={{ color: "black" }}> My Booking</span>
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            navigate("/histories/");
          }}
          className="dropDownNav"
        >
          <BsCalendar3 />

          <span style={{ color: "black" }}> History</span>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item
          onClick={() => {
            navigate("/");
            localStorage.removeItem("Roles");
          }}
          className="dropDownNav"
        >
          <FiLogOut />
          <span style={{ color: "black" }}> Logout </span>
        </Dropdown.Item>
      </DropdownMenu>
    </Dropdown>
  );
};

const DropdownOwner = () => {
  const navigate = useNavigate();
  return (
    <Dropdown
      style={{ color: "white", backgroundColor: "white", border: "white" }}
      id="dropdown-basic-button"
      title="Dropdown button"
    >
      <DropdownToggle variant="white">
        <img
          style={{ width: "3.5rem", borderRadius: "50%", backgroundColor: "black" }}
          src={profilePic}
          alt="pp"
        />
      </DropdownToggle>
      <DropdownMenu>
        <Dropdown.Item
          onClick={() => {
            navigate("/profile");
          }}
          className="dropDownNav"
        >
          <BsPerson />
          <span style={{ color: "black" }}> Profile</span>
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            navigate("/indexOwner/");
          }}
          className="dropDownNav"
        >
          <BsListUl />

          <span style={{ color: "black" }}> List Properties</span>
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            navigate("/addProperty/");
          }}
          className="dropDownNav"
        >
          <img src={Cabin} alt="cabin" style={{ width: "1.3rem" }} />

          <span style={{ color: "black" }}> Add Property</span>
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            navigate("/historiesOwner/");
          }}
          className="dropDownNav"
        >
          <BsCalendar3 />

          <span style={{ color: "black" }}> History</span>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item
          onClick={() => {
            navigate("/");
            localStorage.removeItem("Roles");
          }}
          className="dropDownNav"
        >
          <FiLogOut />
          <span style={{ color: "black" }}> Logout </span>
        </Dropdown.Item>
      </DropdownMenu>
    </Dropdown>
  );
};

export { DropdownNav, DropdownOwner };
