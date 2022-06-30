import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavbarTorob from "./navbar";
export default function Home(props) {
  const navigate = useNavigate();
  return (
    <>
      <NavbarTorob />
      <Container className="py-5">
        <div className="d-flex justify-content-center flex-column align-items-center mt-5">
          <div className="d-flex justify-content-center align-items-center ">
            <img
              src="https://torob.com/static/images/torob_logo.svg"
              alt="torob-logo"
              style={{ width: "200px", height: "200px" }}
            />
            <div className="me-5">
              <h1
                className="text-danger display-1"
                onClick={() => navigate("/")}
              >
                ترب
              </h1>
              <h3>موتور جستجوی هوشمند خرید</h3>
            </div>
          </div>
          <div className="input-group w-50 mt-5">
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button">
                <i className="fa fa-search"></i>
              </button>
            </div>
            <input
              type="text"
              className="form-control rounded"
              placeholder="نام کالا را وارد کنید"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
