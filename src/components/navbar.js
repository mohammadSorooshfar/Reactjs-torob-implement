import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { getProducts } from "./redux/cart";
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "./redux/cart";
export default function NavbarTorob(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(useSelector((state) => state.cart.user));
  const [search, setSearch] = useState("");
  const onSearch = () => {
    axios
      .get(`http://localhost:9000/search/${search}`)
      .then((res) => {
        dispatch(getProducts(res.data.products));
        console.log(res.data.products);
        navigate("/search");
      })
      .catch((e) => {
        console.log(e);
      });
  };
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
  const logOut = () => {
    setUser({});
    dispatch(saveUser({}));
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container className="flex-column align-items-start ">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="w-100">
            <div className="w-100 d-flex flex-column">
              <div className="d-md-flex w-100 justify-content-between   mt-3 mt-md-0">
                <div className="input-group  search-navbar">
                  <img
                    src="https://torob.com/static/images/torob_logo.svg"
                    alt="torob-logo"
                    style={{ width: "35px", height: "35px" }}
                    className="ms-2 d-none d-md-block"
                  />
                  <h2
                    className="text-danger ms-3 d-none d-md-block"
                    onClick={() => navigate("/")}
                  >
                    ترب
                  </h2>
                  <button
                    className="btn btn-danger btn-search"
                    type="button"
                    onClick={onSearch}
                  >
                    <i className="fa fa-search"></i>
                  </button>
                  <input
                    type="text"
                    className="form-control input-search"
                    placeholder="نام کالا را وارد کنید"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-end  mt-3 mt-md-0">
                  {user.username ? (
                    <DropdownButton
                      id="dropdown-basic-button"
                      title={user.username}
                    >
                      <Dropdown.Item>
                        <Link to="/profile" className="link-profile">
                          Profile
                        </Link>{" "}
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link
                          to="/login"
                          className="link-profile"
                          onClick={() => logOut()}
                        >
                          logout
                        </Link>{" "}
                      </Dropdown.Item>
                    </DropdownButton>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate("/signup")}
                    >
                      ثبت نام یا ورود
                    </button>
                  )}
                </div>
              </div>
              <Nav className="mt-3 w-100">
                <NavDropdown title="موبایل" className="me-5">
                  <NavDropdown.Item
                    onClick={() => {
                      checkCategory("/mobile");
                    }}
                  >
                    <button className="nav-link nav-button">
                      گوشی موبایل{" "}
                    </button>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={() => {
                      checkCategory("/mobile/samsung");
                    }}
                  >
                    <button className="nav-link nav-button">
                      گوشی سامسونگ{" "}
                    </button>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      checkCategory("/mobile/xiaomi");
                    }}
                  >
                    <button className="nav-link nav-button">
                      گوشی شیائومی
                    </button>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      checkCategory("/mobile/apple");
                    }}
                  >
                    <button className="nav-link nav-button">گوشی اپل</button>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="تبلت" className="me-5">
                  <NavDropdown.Item
                    onClick={() => {
                      checkCategory("/tablet");
                    }}
                  >
                    <button className="nav-link nav-button">تبلت</button>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={() => {
                      checkCategory("/tablet/samsung");
                    }}
                  >
                    <button className="nav-link nav-button">
                      تبلت سامسونگ
                    </button>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      checkCategory("/tablet/xiaomi");
                    }}
                  >
                    <button className="nav-link nav-button">
                      تبلت شیائومی
                    </button>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      checkCategory("/tablet/apple");
                    }}
                  >
                    <button className="nav-link nav-button">تبلت اپل</button>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="لپ تاپ" className="me-5">
                  <NavDropdown.Item
                    onClick={() => {
                      checkCategory("/laptop");
                    }}
                  >
                    <button className="nav-link nav-button">
                      لپ تاپ و نوت بوک{" "}
                    </button>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={() => {
                      checkCategory("/laptop/lenovo");
                    }}
                  >
                    <button className="nav-link nav-button">لپ تاپ لنوو</button>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      checkCategory("/laptop/asus");
                    }}
                  >
                    <button className="nav-link nav-button">
                      لپ تاپ ایسوس
                    </button>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      checkCategory("/laptop/apple");
                    }}
                  >
                    <button className="nav-link nav-button">لپ تاپ اپل</button>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
