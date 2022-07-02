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
import { saveUserFavorites } from "./redux/cart";
import Modal from "react-bootstrap/Modal";
import NavbarTorob from "./navbar";
import axios from "axios";
export default function Profile(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.cart.user);
  console.log(user);
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState("mobile");
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [usernameInput, setUsernameInput] = useState(username);
  const [emailInput, setEmailInput] = useState(email);
  const [phoneInput, setPhoneInput] = useState(user.phone);
  const [storeName, setStoreName] = useState("");
  const [storeCity, setStoreCity] = useState("");
  const [storeAlreadyAdded, setStoreAlreadyAdded] = useState(false);
  const [store, setStore] = useState(false);
  const [report, setReport] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
  const [shops, setShops] = useState([]);
  const [favorites, setFavorites] = useState([]);

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
    let bodyParameters = {
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

    const bodyParameters = {
      pname: productDetails.name,
      pprice: productDetails.price,
      plink: productDetails.url,
      pimglink: productDetails.image,
      ram: productDetails.ram,
      shopname: store,
      model: productDetails.brand,
      type: category,
      cpu: productDetails.colorOrCpu,
      gpu: productDetails.weightOrGpu,
      page_dimensions: productDetails.garantyOrScreenSize,
      color: productDetails.colorOrCpu,
      weight: productDetails.weightOrGpu,
      warranty: productDetails.garantyOrScreenSize,
      userid: user.userid,
    };
    console.log(bodyParameters);
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
  const onAddStoreSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const bodyParameters = {
      shopname: storeName,
      shop_city: storeCity,
      userid: user.userid,
    };
    console.log(bodyParameters, config);
    axios
      .post(
        `http://localhost:9000/profile/shop_owner/add_shop`,
        bodyParameters,
        config
      )
      .then((res) => {
        console.log(res.data);
        setStoreAlreadyAdded(false);
      })
      .catch((e) => {
        console.log(e);
        setStoreAlreadyAdded(true);
      });
  };
  const getShops = () => {
    console.log("here");
    if (user.role != "normal") {
      axios
        .get(
          `http://localhost:9000/profile/shop_owner/getshop_user/${user.userid}`
        )
        .then((res) => {
          console.log(res.data);
          setShops(res.data.shops);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  const getReports = (id) => {
    if (user.role != "normal") {
      axios
        .get(`http://localhost:9000/report/shop/getlist/${id}`)
        .then((res) => {
          setReport(res.data.reports);
          console.log(res.data.reports);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  const getFavorites = () => {
    axios
      .get(`http://localhost:9000/favlist/get/${user.userid}`)
      .then((res) => {
        console.log(res.data.products);
        setFavorites(res.data.products);
        console.log(favorites);
        dispatch(saveUserFavorites(favorites));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const removeFromFav = (product) => {
    axios
      .delete(
        `http://localhost:9000/favlist/delete/${user.userid}/${product.productid}`
      )
      .then((res) => {
        console.log(res);
        let favoriteList = [...favorites];
        favoriteList.splice(favoriteList.indexOf(product.productid));
        setFavorites(favoriteList);
        dispatch(saveUserFavorites(favorites));
        getFavorites();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <NavbarTorob />
      <Container className="mt-5">
        <div className=" mb-3">
          <div className="border text-center d-md-flex align-items-center justify-content-between p-4">
            <h3 className="mb-0 ">{username} خوش آمدید</h3>
            <p className="mb-0 me-md-5">{email}</p>
          </div>
        </div>
        {role === "normal" ? (
          <Accordion alwaysOpen>
            <Accordion.Item
              eventKey="0"
              onMouseEnter={getFavorites}
              onClick={getFavorites}
            >
              <Accordion.Header>کالا های محبوب</Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  {favorites.map((product) => {
                    return (
                      <div className="col-lg-3 col-md-4  col-6">
                        <div class="card p-1">
                          <span
                            class="wish-icon me-2"
                            onClick={() => {
                              removeFromFav(product);
                            }}
                          >
                            <i class="fa fa-heart"></i>
                          </span>
                          <img
                            class="card-img-top product-img"
                            src={product.imglink}
                            alt="Card cap"
                          />
                          <div class="card-body d-flex flex-column justify-content-center align-items-center">
                            <h5 class="card-title text-secondary product-name">
                              {product.name}
                            </h5>
                            <p class="card-text">
                              از {product.low_price} تومان
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
                  className="edit-form py-5 px-4 d-flex  justify-content-between "
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
                  <Button
                    variant="warning"
                    type="submit"
                    className="mt-4 mt-lg-0"
                  >
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
                    <div className="col-12 col-lg-4">
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
                    <div className="col-6">
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>برند</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => changeProductDetail(e, "brand")}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-6">
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
                    <div className="col-6 col-md-4">
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>نام محصول</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => changeProductDetail(e, "name")}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-6 col-md-4">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>قیمت</Form.Label>
                        <Form.Control
                          type="number"
                          onChange={(e) => changeProductDetail(e, "price")}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-6 col-md-4 mt-3 mt-md-0">
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
                    <div className="col-6 col-md-3">
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
                    <div className="col-6 col-md-3">
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
                    <div className="col-6 col-md-3  mt-3 mt-md-0">
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
                    <div className="col-6 col-md-3 mt-3 mt-md-0">
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>رم</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => changeProductDetail(e, "ram")}
                        />{" "}
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-12 col-md-4">
                      <select
                        class="form-select"
                        onMouseEnter={getShops}
                        onChange={(e) => setStore(e.target.value)}
                      >
                        <option value="" selected>
                          انتخاب فروشگاه
                        </option>
                        {shops.map((shop) => {
                          return (
                            <option value={shop.shopname}>
                              {shop.shopname}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <Button className="mt-5" variant="success" type="submit">
                    افزودن کالا
                  </Button>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>فروشگاه ها</Accordion.Header>
              <Accordion.Body>
                <Accordion defaultActiveKey={["0"]}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>افزودن فروشگاه</Accordion.Header>
                    <Accordion.Body>
                      {storeAlreadyAdded ? (
                        <div class="alert alert-danger mb-0 mt-2" role="alert">
                          فروشگاه با این نام قبلا ثبت شده است!
                        </div>
                      ) : (
                        ""
                      )}
                      <Form className=" p-2" onSubmit={onAddStoreSubmit}>
                        <div className="row mt-5">
                          <div className="col">
                            <Form.Group>
                              <Form.Label>نام فروشگاه</Form.Label>
                              <Form.Control
                                type="text"
                                defaultValue={storeName}
                                onChange={(e) => setStoreName(e.target.value)}
                                required
                              />
                            </Form.Group>
                          </div>
                          <div className="col">
                            <Form.Group>
                              <Form.Label>شهر فروشگاه</Form.Label>
                              <Form.Control
                                type="text"
                                defaultValue={storeCity}
                                onChange={(e) => setStoreCity(e.target.value)}
                                required
                              />
                            </Form.Group>
                          </div>
                        </div>
                        <Button
                          className="mt-5"
                          variant="success"
                          type="submit"
                        >
                          افزودن فروشگاه
                        </Button>
                      </Form>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" onMouseEnter={getShops}>
                    <Accordion.Header>لیست فروشگاه ها</Accordion.Header>
                    <Accordion.Body>
                      {shops.map((shop) => {
                        return (
                          <div className="d-flex justify-content-between align-items-center p-4 border mb-3">
                            <h3 className="m-0 text-dark">{shop.shopname}</h3>
                            <h4 className="m-0 text-secondary">{shop.city}</h4>

                            <button
                              className="btn btn-outline-warning ms-2"
                              onClick={() => {
                                console.log("hieeeeeeeeeeeeeee");
                                getReports(shop.shopid);
                                handleShow();
                              }}
                            >
                              گزارش
                            </button>
                          </div>
                        );
                      })}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )}
        {Object.values(report).length !== 0 ? (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>گزارش</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {report.map((repo) => {
                return (
                  <div>
                    <h1>برای محصول {repo.name}</h1>
                    <p>{repo.report1}</p>
                    <p>{repo.report2}</p>
                  </div>
                );
              })}
            </Modal.Body>
          </Modal>
        ) : (
          ""
        )}
      </Container>
    </>
  );
}
