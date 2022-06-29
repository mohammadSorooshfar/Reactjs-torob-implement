import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Accordion from "react-bootstrap/Accordion";
import NavbarTorob from "./navbar";
export default function Products(props) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  return (
    <>
      <NavbarTorob />
      <aside>
        <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>زیر دسته ها</Accordion.Header>
            <Accordion.Body>
              <div
                className="brand-div d-flex justify-content-between align-items-center mb-2"
                onClick={() => navigate("/mobiles/samsung")}
              >
                <p>سامسونگ</p>
                <p>samsung</p>
              </div>
              <div
                className="brand-div d-flex justify-content-between align-items-center mb-2"
                onClick={() => navigate("/mobiles/xiaomi")}
              >
                <p>شیائومی</p>
                <p>xiaomi</p>
              </div>
              <div
                className="brand-div d-flex justify-content-between align-items-center mb-2"
                onClick={() => navigate("/mobiles/apple")}
              >
                <p>اپل</p>
                <p>apple</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>قیمت</Accordion.Header>
            <Accordion.Body>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                  <div class="input-group mb-3 w-40">
                    <div class="input-group-append">
                      <span class="input-group-text" id="basic-addon2">
                        از
                      </span>
                    </div>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="input-group mb-3 w-40">
                    <div class="input-group-append">
                      <span class="input-group-text" id="basic-addon2">
                        تا
                      </span>
                    </div>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <button className="btn btn-primary w-25">اعمال فیلتر</button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </aside>
      <main>
        <div className="row mb-3">
          <div className="col-3">
            <select class="form-select">
              <option selected>مرتب سازی</option>
              <option value="1">ارزان ترین</option>
              <option value="2">گران ترین</option>
              <option value="3">جدید ترین</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
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
                <h5 class="card-title text-secondary">گوشی موبایل آیفون 13</h5>
                <p class="card-text">۴۵,۰۰۰,۰۰۰ تومان</p>
                <Link to="/shop/iphone" class="btn btn-outline-success">
                  مشاهده فروشندگان
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="card p-1">
              <span className="wish-icon me-2">
                <i
                  className={liked ? "fa fa-heart" : "fa fa-heart-o"}
                  onClick={() => setLiked(!liked)}
                ></i>
              </span>
              <img
                className="card-img-top"
                src="https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg"
                alt="Card cap"
              />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title text-secondary">
                  گوشی موبایل آیفون 13
                </h5>
                <p className="card-text">۴۵,۰۰۰,۰۰۰ تومان</p>
                <a href="#" className="btn btn-outline-success">
                  مشاهده فروشندگان
                </a>
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
                <h5 class="card-title text-secondary">گوشی موبایل آیفون 13</h5>
                <p class="card-text">۴۵,۰۰۰,۰۰۰ تومان</p>
                <a href="#" class="btn btn-outline-success">
                  مشاهده فروشندگان
                </a>
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
                <h5 class="card-title text-secondary">گوشی موبایل آیفون 13</h5>
                <p class="card-text">۴۵,۰۰۰,۰۰۰ تومان</p>
                <a href="#" class="btn btn-outline-success">
                  مشاهده فروشندگان
                </a>
              </div>
            </div>
          </div>
        </div>
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
                <h5 class="card-title text-secondary">گوشی موبایل آیفون 13</h5>
                <p class="card-text">۴۵,۰۰۰,۰۰۰ تومان</p>
                <a href="#" class="btn btn-outline-success">
                  مشاهده فروشندگان
                </a>
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
                <h5 class="card-title text-secondary">گوشی موبایل آیفون 13</h5>
                <p class="card-text">۴۵,۰۰۰,۰۰۰ تومان</p>
                <a href="#" class="btn btn-outline-success">
                  مشاهده فروشندگان
                </a>
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
                <h5 class="card-title text-secondary">گوشی موبایل آیفون 13</h5>
                <p class="card-text">۴۵,۰۰۰,۰۰۰ تومان</p>
                <a href="#" class="btn btn-outline-success">
                  مشاهده فروشندگان
                </a>
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
                <h5 class="card-title text-secondary">گوشی موبایل آیفون 13</h5>
                <p class="card-text">۴۵,۰۰۰,۰۰۰ تومان</p>
                <a href="#" class="btn btn-outline-success">
                  مشاهده فروشندگان
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
