import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function Profile(props) {
  const navigate = useNavigate();
  const [category, setCategory] = useState("mobile");
  const [username, setUsername] = useState("mohammad sorooshfar");
  const [email, setEmail] = useState("mohammad.sorooshfar@gmail.com");
  const [usernameInput, setUsernameInput] = useState(username);
  const [emailInput, setEmailInput] = useState(email);
  const [phoneInput, setPhoneInput] = useState("09371933465");
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    url: "",
    garanty: "",
    colorOrCpu: "",
    weight: "",
    ram: "",
  });
  const role = "client";
  const changeProductDetail = (e, property) => {
    const details = productDetails;
    details[property] = `${e.target.value}`;
    setProductDetails(details);
  };
  const onEditFormSubmit = (e) => {
    e.preventDefault();
    setUsername(usernameInput);
    setEmail(emailInput);
  };
  const onAddFormSubmit = (e) => {
    e.preventDefault();
    console.log(productDetails);
  };

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
      <Container className="mt-5">
        <div className=" mb-3">
          <div className="border d-flex align-items-center justify-content-between p-4">
            <h3 className="mb-0 ">{username} خوش آمدید</h3>
            <p className="mb-0 me-5">{email}</p>
          </div>
        </div>
        {role === "client" ? (
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>کالا های محبوب</Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  <div className="col-lg-3 col-6">
                    <div class="card p-1">
                      <span class="wish-icon me-2">
                        <i class="fa fa-heart-o"></i>
                      </span>
                      <img
                        class="card-img-top"
                        src="https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg"
                        alt="Card cap"
                      />
                      <div class="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 class="card-title text-secondary">
                          گوشی موبایل آیفون 13
                        </h5>
                        <p class="card-text">۴۵,۰۰۰,۰۰۰ تومان</p>
                        <Link to="/shop/iphone" class="btn btn-outline-success">
                          مشاهده فروشندگان
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div class="card p-1">
                      <span class="wish-icon me-2">
                        <i class="fa fa-heart-o"></i>
                      </span>
                      <img
                        class="card-img-top"
                        src="https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg"
                        alt="Card cap"
                      />
                      <div class="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 class="card-title text-secondary">
                          گوشی موبایل آیفون 13
                        </h5>
                        <p class="card-text">۴۵,۰۰۰,۰۰۰ تومان</p>
                        <Link to="/shop/iphone" class="btn btn-outline-success">
                          مشاهده فروشندگان
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div class="card p-1">
                      <span class="wish-icon me-2">
                        <i class="fa fa-heart-o"></i>
                      </span>
                      <img
                        class="card-img-top"
                        src="https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg"
                        alt="Card cap"
                      />
                      <div class="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 class="card-title text-secondary">
                          گوشی موبایل آیفون 13
                        </h5>
                        <p class="card-text">۴۵,۰۰۰,۰۰۰ تومان</p>
                        <Link to="/shop/iphone" class="btn btn-outline-success">
                          مشاهده فروشندگان
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div class="card p-1">
                      <span class="wish-icon me-2">
                        <i class="fa fa-heart-o"></i>
                      </span>
                      <img
                        class="card-img-top"
                        src="https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg"
                        alt="Card cap"
                      />
                      <div class="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 class="card-title text-secondary">
                          گوشی موبایل آیفون 13
                        </h5>
                        <p class="card-text">۴۵,۰۰۰,۰۰۰ تومان</p>
                        <Link to="/shop/iphone" class="btn btn-outline-success">
                          مشاهده فروشندگان
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ) : (
          <Accordion defaultActiveKey={["0"]}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>حساب کاربر</Accordion.Header>
              <Accordion.Body>
                <Form
                  className=" py-5 px-4 d-flex  justify-content-between align-items-end"
                  onSubmit={onEditFormSubmit}
                >
                  <Form.Group className="" controlId="formBasicPassword">
                    <Form.Label>نام کاربری</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={usernameInput}
                      onChange={(e) => setUsernameInput(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label>ایمیل</Form.Label>
                    <Form.Control
                      type="email"
                      defaultValue={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="" controlId="formBasicPassword">
                    <Form.Label>شماره موبایل</Form.Label>
                    <Form.Control
                      type="phone"
                      defaultValue={phoneInput}
                      onChange={(e) => setPhoneInput(e.target.value)}
                    />{" "}
                  </Form.Group>
                  <Button variant="warning" type="submit">
                    ویرایش اطلاعات
                  </Button>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>افزودن کالا</Accordion.Header>
              <Accordion.Body>
                <Form className=" py-5 px-4" onSubmit={onAddFormSubmit}>
                  <div className="row ">
                    <div className="col-4">
                      <select
                        class="form-select"
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="mobile" selected>
                          موبایل
                        </option>
                        <option value="tablet">تبلت</option>
                        <option value="laptop">لپ تاپ</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col">
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>نام محصول</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => changeProductDetail(e, "name")}
                        />
                      </Form.Group>
                    </div>
                    <div className="col">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>قیمت</Form.Label>
                        <Form.Control
                          type="number"
                          onChange={(e) => changeProductDetail(e, "price")}
                        />
                      </Form.Group>
                    </div>
                    <div className="col">
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label> لینک صفحه محصول</Form.Label>
                        <Form.Control
                          type="url"
                          onChange={(e) => changeProductDetail(e, "url")}
                        />{" "}
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col">
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>گارانتی</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => changeProductDetail(e, "garanty")}
                        />
                      </Form.Group>
                    </div>
                    <div className="col">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>
                          {category === "laptop" ? "پردازنده" : "رنگ"}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => changeProductDetail(e, "colorOrCpu")}
                        />
                      </Form.Group>
                    </div>
                    <div className="col">
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>وزن</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => changeProductDetail(e, "weight")}
                        />{" "}
                      </Form.Group>
                    </div>
                    <div className="col">
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>رم</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => changeProductDetail(e, "ram")}
                        />{" "}
                      </Form.Group>
                    </div>
                  </div>
                  <Button className="mt-5" variant="success" type="submit">
                    افزودن کالا
                  </Button>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )}
      </Container>
    </>
  );
}
