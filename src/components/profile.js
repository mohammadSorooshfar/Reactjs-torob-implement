import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavbarTorob from "./navbar";
import axios from "axios";
export default function Profile(props) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.cart.user);
  console.log(user);
  const [category, setCategory] = useState("mobile");
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [usernameInput, setUsernameInput] = useState(username);
  const [emailInput, setEmailInput] = useState(email);
  const [phoneInput, setPhoneInput] = useState("");
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    url: "",
    garantyOrScreenSize: "",
    colorOrCpu: "",
    weightOrGpu: "",
    ram: "",
    brand: "",
    image: "",
  });
  const role = user.role;
  const changeProductDetail = (e, property) => {
    const details = productDetails;
    details[property] = `${e.target.value}`;
    setProductDetails(details);
  };
  const onEditFormSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const bodyParameters = {
      email: emailInput,
      oldusername: user.username,
      newusername: usernameInput,
      number: phoneInput,
    };

    axios
      .put(
        `http://localhost:9000/profile/shop_owner/change_profile`,
        bodyParameters,
        config
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });

    setUsername(usernameInput);
    setEmail(emailInput);
  };
  const onAddFormSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    console.log(category);

    const bodyParameters = {
      pname: productDetails.name,
      pprice: productDetails.price,
      plink: productDetails.url,
      pimglink: productDetails.image,
      ram: productDetails.ram,
      shopid: "3",
      model: productDetails.brand,
      type: category,
      cpu: productDetails.colorOrCpu,
      gpu: productDetails.weightOrGpu,
      page_dimensions: productDetails.garantyOrScreenSize,
      color: productDetails.colorOrCpu,
      weight: productDetails.weightOrGpu,
      warranty: productDetails.garantyOrScreenSize,
    };
    axios
      .post(
        `http://localhost:9000/profile/shop_owner/add_product`,
        bodyParameters,
        config
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });

    console.log(productDetails);
  };

  return (
    <>
      <NavbarTorob />
      <Container className="mt-5">
        <div className=" mb-3">
          <div className="border d-flex align-items-center justify-content-between p-4">
            <h3 className="mb-0 ">{username} خوش آمدید</h3>
            <p className="mb-0 me-5">{email}</p>
          </div>
        </div>
        {role === "normal" ? (
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
                        <Form.Label>برند</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => changeProductDetail(e, "brand")}
                        />
                      </Form.Group>
                    </div>
                    <div className="col">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>لینک عکس</Form.Label>
                        <Form.Control
                          type="url"
                          onChange={(e) => changeProductDetail(e, "image")}
                        />
                      </Form.Group>
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
                        <Form.Label>
                          {category === "laptop" ? "اندازه صفحه" : "گارانتی"}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) =>
                            changeProductDetail(e, "garantyOrScreenSize")
                          }
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
                        <Form.Label>
                          {category === "laptop" ? "کارت گرافیک" : "وزن"}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) =>
                            changeProductDetail(e, "weightOrGpu")
                          }
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
