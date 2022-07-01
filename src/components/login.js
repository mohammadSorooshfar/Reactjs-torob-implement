import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { saveUser, saveUserFavorites } from "./redux/cart";

export default function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [wrong, setWrong] = useState(false);
  const onSubmitForm = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:9000/signin/`, { email, password })
      .then((res) => {
        dispatch(saveUser(res.data));
        setWrong(false);
        if (res.data.role === "normal") {
          console.log("res");
          const config = {
            headers: {
              Authorization: `Bearer ${res.data.token}`,
            },
          };
          const bodyParameters = {
            userid: res.data.userid,
          };
          console.log(config);
          axios
            .get(`http://localhost:9000/favlist/get`, bodyParameters, config)
            .then((res) => {
              console.log(res.data);
              dispatch(saveUserFavorites(res.data));
              navigate("/profile");
            })
            .catch((e) => {
              console.log(e);
            });
        }
      })
      .catch((e) => {
        console.log(e);
        setWrong(true);
      });
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
          {wrong ? (
            <div class="alert alert-danger mb-0 mt-2" role="alert">
              ایمیل یا کلمه عبور اشتباه میباشد
            </div>
          ) : (
            ""
          )}
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
              <Form.Label>کلمه عبور</Form.Label>
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
