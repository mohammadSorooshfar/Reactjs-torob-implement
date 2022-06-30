import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { getProducts } from "./redux/cart";
import { useSelector, useDispatch } from "react-redux";
export default function NavbarTorob(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function checkCategory(pageLoc) {
    console.log(pageLoc);

    axios
      .get(`http://localhost:9000${pageLoc}`)
      .then((res) => {
        dispatch(getProducts(res.data.products));
        console.log(res.data.products);
        navigate(pageLoc);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container className="flex-column align-items-start ">
          <div className="d-flex ms-5 justify-content-between w-100">
            <div className="input-group w-50">
              <img
                src="https://torob.com/static/images/torob_logo.svg"
                alt="torob-logo"
                style={{ width: "35px", height: "35px" }}
                className="ms-2"
              />
              <h2 className="text-danger ms-3" onClick={() => navigate("/")}>
                ترب
              </h2>
              <button className="btn btn-danger btn-search" type="button">
                <i className="fa fa-search"></i>
              </button>
              <input
                type="text"
                className="form-control input-search"
                placeholder="نام کالا را وارد کنید"
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/signup")}
            >
              ثبت نام یا ورود
            </button>
          </div>{" "}
          <Nav className="mt-3">
            <NavDropdown title="موبایل" className="me-5">
              <NavDropdown.Item>
                <button
                  className="nav-link nav-button"
                  onClick={() => {
                    checkCategory("/mobile");
                  }}
                >
                  گوشی موبایل{" "}
                </button>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <button
                  className="nav-link nav-button"
                  onClick={() => {
                    checkCategory("/mobile/samsung");
                  }}
                >
                  گوشی سامسونگ{" "}
                </button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <button
                  className="nav-link nav-button"
                  onClick={() => {
                    checkCategory("/mobile/xiaomi");
                  }}
                >
                  گوشی شیائومی
                </button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <button
                  className="nav-link nav-button"
                  onClick={() => {
                    checkCategory("/mobile/apple");
                  }}
                >
                  گوشی اپل
                </button>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="تبلت" className="me-5">
              <NavDropdown.Item>
                <button
                  className="nav-link nav-button"
                  onClick={() => {
                    checkCategory("/tablet");
                  }}
                >
                  تبلت
                </button>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <button
                  className="nav-link nav-button"
                  onClick={() => {
                    checkCategory("/tablet/samsung");
                  }}
                >
                  تبلت سامسونگ
                </button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <button
                  className="nav-link nav-button"
                  onClick={() => {
                    checkCategory("/tablet/xiaomi");
                  }}
                >
                  تبلت شیائومی
                </button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <button
                  className="nav-link nav-button"
                  onClick={() => {
                    checkCategory("/tablet/apple");
                  }}
                >
                  تبلت اپل
                </button>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="لپ تاپ" className="me-5">
              <NavDropdown.Item>
                <button
                  className="nav-link nav-button"
                  onClick={() => {
                    checkCategory("/laptop");
                  }}
                >
                  لپ تاپ و نوت بوک{" "}
                </button>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <button
                  className="nav-link nav-button"
                  onClick={() => {
                    checkCategory("/laptop/lenovo");
                  }}
                >
                  لپ تاپ لنوو
                </button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <button
                  className="nav-link nav-button"
                  onClick={() => {
                    checkCategory("/laptop/asus");
                  }}
                >
                  لپ تاپ ایسوس
                </button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <button
                  className="nav-link nav-button"
                  onClick={() => {
                    checkCategory("/laptop/apple");
                  }}
                >
                  لپ تاپ اپل
                </button>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
