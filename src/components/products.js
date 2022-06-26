import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function Products(props) {
  const navigate = useNavigate();
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
              <h2 className="text-danger ms-3">ترب</h2>
              <input
                type="text"
                className="form-control rounded"
                placeholder="نام کالا را وارد کنید"
              />
              <div className="input-group-append">
                <button className="btn btn-danger" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
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
                <Link className="nav-link" to="/mobiles">
                  گوشی موبایل{" "}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="nav-link" to="/mobiles/samsung">
                  گوشی سامسونگ{" "}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-link" to="/mobiles/xiaomi">
                  گوشی شیائومی
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-link" to="/mobiles/apple">
                  گوشی اپل
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="تبلت" className="me-5">
              <NavDropdown.Item>
                <Link className="nav-link" to="/tablets">
                  تبلت
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="nav-link" to="/tablets/samsung">
                  تبلت سامسونگ
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-link" to="/tablets/xiaomi">
                  تبلت شیائومی
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-link" to="/tablets/apple">
                  تبلت اپل
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="لپ تاپ" className="me-5">
              <NavDropdown.Item>
                <Link className="nav-link" to="/laptops">
                  لپ تاپ و نوت بوک{" "}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="nav-link" to="/laptops/lenovo">
                  لپ تاپ لنوو
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-link" to="/laptops/asus">
                  لپ تاپ ایسوس
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-link" to="/laptops/apple">
                  لپ تاپ اپل
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
