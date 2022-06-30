import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Accordion from "react-bootstrap/Accordion";
import NavbarTorob from "./navbar";
import { useSelector, useDispatch } from "react-redux";
import { addSelectedProduct, addSelectedProductDetails } from "./redux/cart";
import axios from "axios";
export default function Products(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.cart.user);
  const [liked, setLiked] = useState([]);

  const productList = useSelector((state) => state.cart.products);
  const setProduct = (product) => {
    dispatch(addSelectedProduct(product));
    let bodyParameters = {
      productid: product.id,
      type: product.type,
    };
    console.log(product);
    axios
      .get(`http://localhost:9000/product/getshop`, bodyParameters)
      .then((res) => {
        dispatch(addSelectedProductDetails(res.data));
        navigate("/product");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const addToFav = (product) => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const bodyParameters = {
      commodityid: product.id,
      userid: user.id,
    };
    console.log(user);
    axios
      .post(`http://localhost:9000/favlist/add`, bodyParameters, config)
      .then((res) => {
        console.log(res.data);
        let likedProducts = [...liked, product.id];
        setLiked(likedProducts);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const removeFromFav = (product) => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const bodyParameters = {
      commodityid: product.id,
      userid: user.id,
    };
    console.log(user);
    axios
      .delete(`http://localhost:9000/favlist/delete`, bodyParameters, config)
      .then((res) => {
        let likedProducts = [...liked];
        likedProducts.splice(likedProducts.indexOf(product.id), 1);
        setLiked(likedProducts);
      })
      .catch((e) => {
        console.log(e);
      });
  };
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
          {Object.keys(user).length !== 0
            ? user.role === "normal"
              ? productList.map((product) => {
                  return (
                    <div className="col-lg-3 col-6">
                      <div class="card p-1">
                        <span
                          class="wish-icon me-2"
                          onClick={() => {
                            liked.indexOf(product.id) === -1
                              ? addToFav(product)
                              : removeFromFav(product);
                          }}
                        >
                          {liked.indexOf(product.id) === -1 ? (
                            <i class="fa fa-heart-o"></i>
                          ) : (
                            <i class="fa fa-heart"></i>
                          )}
                        </span>
                        <img
                          class="card-img-top product-img"
                          src={product.img}
                          alt="Card cap"
                        />
                        <div class="card-body d-flex flex-column justify-content-center align-items-center">
                          <h5 class="card-title text-secondary product-name">
                            {product.name}
                          </h5>
                          <p class="card-text">از {product.low_price} تومان</p>
                          <button
                            onClick={() => setProduct(product)}
                            class="btn btn-outline-success"
                          >
                            مشاهده فروشندگان
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              : productList.map((product) => {
                  return (
                    <div className="col-lg-3 col-6">
                      <div class="card p-1">
                        <img
                          class="card-img-top product-img"
                          src={product.img}
                          alt="Card cap"
                        />
                        <div class="card-body d-flex flex-column justify-content-center align-items-center">
                          <h5 class="card-title text-secondary product-name">
                            {product.name}
                          </h5>
                          <p class="card-text">از {product.low_price} تومان</p>
                          <button
                            onClick={() => setProduct(product)}
                            class="btn btn-outline-success"
                          >
                            افزودن محصول
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
            : productList.map((product) => {
                return (
                  <div className="col-lg-3 col-6">
                    <div class="card p-1">
                      <img
                        class="card-img-top product-img"
                        src={product.img}
                        alt="Card cap"
                      />
                      <div class="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 class="card-title text-secondary product-name">
                          {product.name}
                        </h5>
                        <p class="card-text">از {product.low_price} تومان</p>
                        <button
                          onClick={() => setProduct(product)}
                          class="btn btn-outline-success"
                        >
                          مشاهده فروشندگان
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </main>
    </>
  );
}
