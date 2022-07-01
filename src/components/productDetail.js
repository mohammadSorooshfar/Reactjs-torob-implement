import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import NavbarTorob from "./navbar";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
export default function ProductDetail(props) {
  const [show, setShow] = useState(false);
  const [modalDetails, setModalDetails] = useState({});
  const [report, setReport] = useState([]);
  const user = useSelector((state) => state.cart.user);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const product = useSelector((state) => state.cart.selectedProduct);
  const productDetails = useSelector(
    (state) => state.cart.selectedProductDetails
  );
  const navigate = useNavigate();
  const createReport = () => {
    if (report.length != 0) {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      let bodyParameters;
      if (report.length == 1) {
        bodyParameters = {
          commodityid: productDetails.productid,
          report1: report[0],
          report2: "",
          shopid: modalDetails.shopid,
        };
      } else {
        bodyParameters = {
          commodityid: productDetails.productid,
          report1: report[0],
          report2: report[1],
          shopid: modalDetails.shopid,
        };
      }

      axios
        .post(`http://localhost:9000/report/normal/add`, bodyParameters, config)
        .then((res) => {
          setReport([]);
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  console.log(report);
  return (
    <>
      <NavbarTorob />
      <div className="product-detail-main d-flex justify-content-between">
        <div className="w-75 bg-gray">
          <div className="bg-white product-name-row d-flex align-items-center px-5 py-4">
            <div>
              <img
                className="product-detail-image ms-4"
                src={product.img_link}
                alt=""
              />
            </div>{" "}
            <div>
              <h2>{product.name}</h2>
              <p className="text-danger">
                قیمت از {product.low_price} تا {product.high_price}
              </p>
            </div>
          </div>
          <div className="bg-white d-flex flex-column mt-4 p-4 ">
            {productDetails.shops
              ? productDetails.shops.map((shop) => {
                  return (
                    <div className="d-flex justify-content-between align-items-center p-4 border mb-3">
                      <div>
                        <p className="m-0">{shop.shopname}</p>
                        <p className="m-0 text-secondary">{shop.shopcity}</p>
                      </div>
                      <div>
                        <p className="text-danger m-0">
                          {shop.shopprice} تومان
                        </p>
                      </div>
                      <div>
                        <button
                          className="btn btn-outline-warning ms-2"
                          onClick={() => {
                            setReport([]);
                            setModalDetails(shop);
                            handleShow();
                          }}
                        >
                          گزارش
                        </button>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => {
                            window.open(shop.shoplink, "_blank");
                          }}
                        >
                          خرید اینترنتی
                        </button>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
        <div className="w-20 bg-white p-4">
          <h3>مشخصات کلی</h3>
          <hr />
          <div>
            <p className="m-0">
              {product.type === "laptop" ? "اندازه صفحه" : "گارانتی"}
            </p>
            <p className="text-secondary">
              {product.type === "laptop"
                ? productDetails.page_dimensions
                : productDetails.warranty}
            </p>
          </div>
          <div>
            <p className="m-0">
              {" "}
              {product.type === "laptop" ? "پردازنده" : "رنگ"}
            </p>
            <p className="text-secondary">
              {product.type === "laptop"
                ? productDetails.cpu
                : productDetails.color}
            </p>
          </div>

          <div>
            <p className="m-0">
              {" "}
              {product.type === "laptop" ? "کارت گرافیک" : "وزن"}
            </p>
            <p className="text-secondary">
              {product.type === "laptop"
                ? productDetails.gpu
                : productDetails.weight}
            </p>
          </div>
          <div>
            <p className="m-0">رم</p>
            <p className="text-secondary">{productDetails.ram}</p>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>گزارش</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center p-1 mb-4">
            <img
              className="product-detail-image ms-4"
              src={product.img_link}
              alt=""
            />
            <div>
              <h2>{modalDetails.shopname}</h2>
              <h5>{product.name}</h5>
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
              onChange={(e) => {
                if (e.target.checked) {
                  let reports = [...report, "قیمت کالا صحیح نیست"];
                  setReport(reports);
                } else {
                  report.splice("قیمت کالا صحیح نیست", 1);
                  setReport(report);
                }
              }}
            />
          </div>
          <div class="form-check checkbox-rounded checkbox-cerulean-blue-filled w-50">
            <input
              type="checkbox"
              class="form-check-input "
              id="roundedExample3"
              onChange={(e) => {
                if (e.target.checked) {
                  let reports = [...report, "کالا موجود نیست"];
                  setReport(reports);
                } else {
                  report.splice("کالا موجود نیست", 1);
                  setReport(report);
                }
              }}
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
          <Button
            variant="primary"
            onClick={() => {
              createReport();
              handleClose();
            }}
          >
            ثبت گزارش
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
