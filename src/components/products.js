import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Accordion from "react-bootstrap/Accordion";
import { useLocation } from "react-router-dom";
import NavbarTorob from "./navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  addSelectedProduct,
  addSelectedProductDetails,
  getProducts,
} from "./redux/cart";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";
export default function Products(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.cart.user);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const productList = useSelector((state) => state.cart.products);
  const [products, setProducts] = useState(
    useSelector((state) => state.cart.products)
  );
  const likes = useSelector((state) => state.cart.userFavorites);

  const [liked, setLiked] = useState(likes);
  console.log(likes, liked);
  const sampleLocation = useLocation();
  const [lastLoc, setLastLoc] = useState(sampleLocation);

  console.log(sampleLocation.pathname.includes("tablet"));
  useEffect(() => {
    if (sampleLocation !== lastLoc) {
      setProducts(productList);
      setLastLoc(sampleLocation);
      setFrom("");
      setTo("");
    }
  });
  const setProduct = (product) => {
    dispatch(addSelectedProduct(product));

    axios
      .get(
        `http://localhost:9000/product/getshop/${product.id}/${product.type}`
      )
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
      userid: user.userid,
    };
    console.log(user);
    axios
      .post(`http://localhost:9000/favlist/add`, bodyParameters, config)
      .then((res) => {
        console.log(res.data);
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
      userid: user.userid,
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
  const sortFunc = (e) => {
    const searchParameter = e.target.value;
    console.log(searchParameter);
    let ProductsLists = products.slice();
    if (searchParameter == "cheap") {
      ProductsLists.sort(function (a, b) {
        return a.low_price - b.low_price;
      });
    } else if (searchParameter == "luxury") {
      ProductsLists.sort(function (a, b) {
        return b.low_price - a.low_price;
      });
    } else if (searchParameter == "luxury") {
      ProductsLists.sort(function (a, b) {
        return b.time - a.time;
      });
    }
    setProducts(ProductsLists);
  };
  const filterFunc = () => {
    let ProductsLists = productList.slice();
    console.log(from, to);
    const filters = (product) => {
      if (!to) {
        setTo(1000000000);
      }
      if (!from) {
        setFrom(0);
      }
      console.log(
        product.low_price <= Number(to) && product.low_price >= Number(from)
      );
      return (
        product.low_price <= Number(to) && product.low_price >= Number(from)
      );
    };
    ProductsLists = ProductsLists.filter(filters);
    setProducts(ProductsLists);
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
                onClick={() => {
                  if (sampleLocation.pathname.includes("tablet")) {
                    checkCategory("/tablet/samsung");
                  } else if (sampleLocation.pathname.includes("mobile")) {
                    checkCategory("/mobile/samsung");
                  } else {
                    checkCategory("/laptop/lenovo");
                  }
                }}
              >
                <p>
                  {sampleLocation.pathname.includes("laptop") ||
                  sampleLocation.pathname.includes("search")
                    ? "لنوو"
                    : "سامسونگ"}
                </p>
                <p>
                  {sampleLocation.pathname.includes("laptop") ||
                  sampleLocation.pathname.includes("search")
                    ? "lenovo"
                    : "samsung"}
                </p>
              </div>
              <div
                className="brand-div d-flex justify-content-between align-items-center mb-2"
                onClick={() => {
                  if (sampleLocation.pathname.includes("tablet")) {
                    checkCategory("/tablet/xiaomi");
                  } else if (sampleLocation.pathname.includes("mobile")) {
                    checkCategory("/mobile/xiaomi");
                  } else {
                    checkCategory("/laptop/asus");
                  }
                }}
              >
                <p>
                  {sampleLocation.pathname.includes("laptop") ||
                  sampleLocation.pathname.includes("search")
                    ? "ایسوس"
                    : "شیائومی"}
                </p>
                <p>
                  {sampleLocation.pathname.includes("laptop") ||
                  sampleLocation.pathname.includes("search")
                    ? "asus"
                    : "xiaomi"}
                </p>
              </div>
              <div
                className="brand-div d-flex justify-content-between align-items-center mb-2"
                onClick={() => {
                  if (sampleLocation.pathname.includes("tablet")) {
                    checkCategory("/tablet/apple");
                  } else if (sampleLocation.pathname.includes("mobile")) {
                    checkCategory("/mobile/apple");
                  } else {
                    checkCategory("/laptop/apple");
                  }
                }}
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
                    <input
                      type="text"
                      class="form-control"
                      value={from}
                      onChange={(e) => {
                        setFrom(e.target.value);
                      }}
                    />
                  </div>
                  <div class="input-group mb-3 w-40">
                    <div class="input-group-append">
                      <span class="input-group-text" id="basic-addon2">
                        تا
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      value={to}
                      onChange={(e) => {
                        setTo(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <button className="btn btn-primary w-25" onClick={filterFunc}>
                  اعمال فیلتر
                </button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </aside>
      <main>
        <div className="row mb-3">
          <div className="col-3">
            <select
              class="form-select"
              onChange={(e) => {
                sortFunc(e);
              }}
            >
              <option value="none" selected>
                مرتب سازی
              </option>
              <option value="cheap">ارزان ترین</option>
              <option value="luxury">گران ترین</option>
              <option value="new">جدید ترین</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          {Object.keys(user).length !== 0
            ? user.role === "normal"
              ? products.map((product) => {
                  return (
                    <div className="col-lg-3 col-6">
                      <div class="card p-1">
                        <span
                          class="wish-icon me-2"
                          onClick={() => {
                            console.log(product);
                            liked.find((productInner) => {
                              return productInner.productid == product.id;
                            })
                              ? removeFromFav(product)
                              : addToFav(product);
                          }}
                        >
                          {liked.find((productInner) => {
                            return productInner.productid == product.id;
                          }) ? (
                            <i class="fa fa-heart"></i>
                          ) : (
                            <i class="fa fa-heart-o"></i>
                          )}
                        </span>
                        <img
                          class="card-img-top product-img"
                          src={product.img_link}
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
              : products.map((product) => {
                  return (
                    <div className="col-lg-3 col-6">
                      <div class="card p-1">
                        <img
                          class="card-img-top product-img"
                          src={product.img_link}
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
            : products.map((product) => {
                return (
                  <div className="col-lg-3 col-6">
                    <div class="card p-1">
                      <img
                        class="card-img-top product-img"
                        src={product.img_link}
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
