import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
export default function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const onSubmitForm = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:9000/signin/`, { email, password })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
    navigate("/profile");
  };
  return (
    <>
      <div className="signup-bg d-flex justify-content-center align-items-center">
        <div className="signup rounded py-5 d-flex flex-column justify-content-center align-items-center ">
          <div
            className="torob-logo d-flex align-items-center"
            onClick={() => navigate("/")}
          >
            <img
              src="https://torob.com/static/images/torob_logo.svg"
              alt="torob-logo"
              style={{ width: "35px", height: "35px" }}
              className="ms-2"
            />
            <h2 className="text-danger ms-3 fs-1">ترب</h2>
          </div>
          <Form
            className=" py-5 d-flex flex-column justify-content-center align-items-center"
            onSubmit={onSubmitForm}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ایمیل</Form.Label>
              <Form.Control
                type="email"
                placeholder="ایمیل را وارد کنید"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label>رمز عبور</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="کلمه عبور را وارد کنید"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="ms-2 mt-2"
                type="checkbox"
                onClick={(e) => {
                  e.target.checked
                    ? setShowPassword(true)
                    : setShowPassword(false);
                }}
                name="showPass"
              />
              <label htmlFor="showPass">نمایش رمز عبور</label>
            </Form.Group>
            <Button variant="danger" type="submit">
              ورود
            </Button>
            <div className="d-flex mt-4">
              <p> ثبت نام نکرده اید؟</p>
              <Link className="me-2 link-login" to="/signup">
                عضویت{" "}
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
