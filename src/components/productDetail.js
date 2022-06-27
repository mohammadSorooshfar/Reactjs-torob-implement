import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export default function ProductDetail(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      <div className="product-detail-main d-flex justify-content-between">
        <div className="w-75 bg-gray">
          <div className="bg-white product-name-row d-flex align-items-center px-5">
            <div>
              <img
                className="product-detail-image"
                src="https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg"
                alt=""
              />
            </div>{" "}
            <div>
              <h2>گوشی موبایل آیفون ۱۳</h2>
              <p className="text-danger">قیمت از ۴۵,۰۰۰,۰۰۰ تا ۶۰,۰۰۰,۰۰۰</p>
            </div>
          </div>
          <div className="bg-white d-flex flex-column mt-4 p-4 ">
            <div className="d-flex justify-content-between align-items-center p-4 border">
              <div>
                <p className="m-0">هیماشاپ</p>
                <p className="m-0 text-secondary">تهران</p>
              </div>
              <div>
                <p className="text-danger">۴۵,۰۰۰,۰۰۰ تومان</p>
              </div>
              <div>
                <button
                  className="btn btn-outline-warning"
                  onClick={handleShow}
                >
                  گزارش
                </button>
                <button className="btn btn-outline-danger">
                  خرید اینترنتی
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-20 bg-white p-4">
          <h3>مشخصات کلی</h3>
          <hr />
          <div>
            <p className="m-0">ابعاد</p>
            <p className="text-secondary">150.9x75.7x8.3 میلیمتر</p>
          </div>
          <div>
            <p className="m-0">وزن</p>
            <p className="text-secondary">194 گرم</p>
          </div>

          <div>
            <p className="m-0">ویژگیهای ظاهری</p>
            <p className="text-secondary">
              فریم دور آلومینیومی سری 7000, پشت دستگاه گلس, دارای گواهینامه IP68
              مقاوم در برابر آب و گرد و غبار
            </p>
          </div>
          <div>
            <p className="m-0">سیم کارت</p>
            <p className="text-secondary">دو سیم کارت, Nano SIM</p>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>گزارش</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center">
            <img
              className="product-detail-image"
              src="https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg"
              alt=""
            />
            <div>
              <h2>هیماشاپ</h2>
              <h5>گوشی موبایل آیفون 13</h5>
            </div>
          </div>
          <div class="form-check checkbox-rounded checkbox-cerulean-blue-filled w-50">
            <label class="form-check-label" for="roundedExample3">
              قیمت کالا صحیح نیست.
            </label>
            <input
              type="checkbox"
              class="form-check-input "
              id="roundedExample3"
            />
          </div>
          <div class="form-check checkbox-rounded checkbox-cerulean-blue-filled w-50">
            <input
              type="checkbox"
              class="form-check-input "
              id="roundedExample3"
            />
            <label class="form-check-label" for="roundedExample3">
              کالا موجود نیست.
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-start">
          <Button variant="danger" onClick={handleClose}>
            انصراف
          </Button>
          <Button variant="primary" onClick={handleClose}>
            ثبت گزارش
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
