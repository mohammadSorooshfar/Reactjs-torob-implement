import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import NavbarTorob from "./navbar";
import axios from "axios";
import { getProducts } from "./redux/cart";
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "./redux/cart";
export default function Home(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(useSelector((state) => state.cart.user));
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
  const logOut = () => {
    setUser({});
    dispatch(saveUser({}));
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container className=" align-items-center justify-content-between ">
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
          {user.username ? (
            <DropdownButton id="dropdown-basic-button" title={user.username}>
              <Dropdown.Item>
                <Link to="/profile" className="link-profile ">
                  Profile
                </Link>{" "}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => logOut()}>
                <Link to="/login" className="link-profile ">
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
        </Container>
      </Navbar>
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
              <button
                className="btn btn-secondary"
                type="button"
                onClick={onSearch}
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
            <input
              type="text"
              className="form-control rounded"
              placeholder="نام کالا را وارد کنید"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
