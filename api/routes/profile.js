var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "torob",
});
con.connect(function (err) {
  if (err) throw err;
});
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
process.env.TOKEN_SECRET;
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
}
router.put(
  "/shop_owner/change_profile",
  authenticateToken,
  function (req, res) {
    var email = req.body.email;
    var Oldusername = req.body.oldusername;
    var Newusername = req.body.newusername;
    var phone_number = req.body.number;
    var sql = "SELECT * FROM user where username='" + Newusername + "'";

    con.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length != 0) {
        res.status(400).send({
          message: "this username alredy exist",
          code: 400,
        });
      } else {
        sql =
          "UPDATE user SET email='" +
          email +
          "',username='" +
          Newusername +
          "',phone_number='" +
          phone_number +
          "' where username='" +
          Oldusername +
          "'";
        // console.log(sql);
        con.query(sql, function (err, result) {
          if (err) throw err;
          res.status(200).send({
            message: "Changes made successfully",
            code: 200,
          });
        });
      }
    });
  }
);
router.post("/shop_owner/add_product", function (req, res) {
  var pname = req.body.pname;
  var pprice = req.body.pprice;
  var plink = req.body.plink;
  var pimglink = req.body.pimglink;
  var ram = req.body.ram;
  var shop = req.body.shopid;
  var model = req.body.model;
  var type = req.body.type;
  var date = new Date();
  var time = date.getTime();

  if (type == "laptop") {
    var cpu = req.body.cpu;
    var gpu = req.body.gpu;
    var page_dimensions = req.body.page_dimensions;
    var sql = "SELECT * FROM commodity  WHERE name='" + pname + "'";

    con.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length != 0) {
        let commodityid = result[0].id;
        // console.log(commodityid)
        var sql2 =
          "SELECT * FROM commodity JOIN shop_commodity ON commodity.id=shop_commodity.commodityid  WHERE name='" +
          pname +
          "' AND shopid='" +
          shop +
          "'";
        con.query(sql2, function (err, result) {
          if (err) throw err;
          if (result.length != 0) {
            res.status(400).send({
              message: "this product alredy exist in shop",
              code: 400,
            });
          } else {
            var sql3 =
              "INSERT INTO shop_commodity (commodityid,shopid,price,link) VALUES ('" +
              commodityid +
              "','" +
              shop +
              "','" +
              pprice +
              "','" +
              plink +
              "')";
            // console.log(sql3);
            con.query(sql3, function (err, result) {
              if (err) throw err;
              var sql4 =
                "SELECT MAX(price) as max ,MIN(price) as min FROM shop_commodity WHERE commodityid='" +
                commodityid +
                "'";
              con.query(sql4, function (err, result) {
                if (err) throw err;
                console.log(result);
                var max = result[0].max;
                var min = result[0].min;
                var sql5 =
                  "UPDATE commodity SET low_price='" +
                  min +
                  "', high_price='" +
                  max +
                  "' WHERE id='" +
                  commodityid +
                  "'";
                con.query(sql5, function (err, result) {
                  if (err) throw err;
                  res.status(200).send({
                    message: "کالا با موفقیت اضافه شد",
                    code: 200,
                  });
                });
              });
            });
          }
        });
      } else {
        var sql2 =
          "INSERT INTO commodity (name,low_price,high_price,model,type,img_link,time) VALUES ('" +
          pname +
          "','" +
          pprice +
          "','" +
          pprice +
          "','" +
          model +
          "','laptop','" +
          pimglink +
          "','" +
          time +
          "')";
        con.query(sql2, function (err, result) {
          if (err) throw err;
          var sql3 = "SELECT * FROM commodity WHERE name='" + pname + "'";
          con.query(sql3, function (err, result) {
            if (err) throw err;
            let commodityid = result[0].id;
            var sql4 =
              "INSERT INTO shop_commodity (commodityid,shopid,price,link) VALUES ('" +
              commodityid +
              "','" +
              shop +
              "','" +
              pprice +
              "','" +
              plink +
              "')";
            con.query(sql4, function (err, result) {
              if (err) throw err;
              var sql5 =
                "INSERT INTO  laptop (commodityid,ram,gpu,cpu,Page_dimensions) VALUES ('" +
                commodityid +
                "','" +
                ram +
                "','" +
                gpu +
                "','" +
                cpu +
                "','" +
                page_dimensions +
                "')";
              con.query(sql5, function (err, result) {
                if (err) throw err;
                res.status(200).send({
                  message: "کالا با موفقیت اضافه شد",
                  code: 200,
                });
              });
            });
          });
          // adding to shop_commodity and laptop table
        });
      }
    });
  } else if (type == "mobile") {
    var weight = req.body.weight;
    var color = req.body.color;
    var warranty = req.body.warranty;
    var sql = "SELECT * FROM commodity  WHERE name='" + pname + "'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length != 0) {
        var commodityid = result[0].id;
        var sql2 =
          "SELECT * FROM commodity JOIN shop_commodity ON commodity.id=shop_commodity.commodityid  WHERE name='" +
          pname +
          "' AND shopid='" +
          shop +
          "'";
        con.query(sql2, function (err, result) {
          if (err) throw err;
          if (result.length != 0) {
            res.status(400).send({
              message: "this product alredy exist in shop",
              code: 400,
            });
          } else {
            var sql3 =
              "INSERT INTO shop_commodity (commodityid,shopid,price,link) VALUES ('" +
              commodityid +
              "','" +
              shop +
              "','" +
              pprice +
              "','" +
              plink +
              "')";
            console.log(sql3);
            con.query(sql3, function (err, result) {
              if (err) throw err;
              var sql4 =
                "SELECT MAX(price),MIN(price) FROM shop_commodity WHERE commodityid='" +
                commodityid +
                "'";
              con.query(sql4, function (err, result) {
                if (err) throw err;
                console.log(result);
                var max = result.max;
                var min = result.min;
                var sql5 =
                  "UPDATE commodity SET low_price='" +
                  min +
                  "', high_price='" +
                  max +
                  "' WHERE id='" +
                  commodityid +
                  "'";
                con.query(sql5, function (err, result) {
                  if (err) throw err;
                  res.status(200).send({
                    message: "کالا با موفقیت اضافه شد",
                    code: 200,
                  });
                });
              });
            });
          }
        });
      } else {
        var sql2 =
          "INSERT INTO commodity (name,low_price,high_price,model,type,img_link,time) VALUES ('" +
          pname +
          "','" +
          pprice +
          "','" +
          pprice +
          "','" +
          model +
          "','mobile','" +
          pimglink +
          "','" +
          time +
          "')";
        con.query(sql2, function (err, result) {
          if (err) throw err;
          var sql3 = "SELECT * FROM commodity WHERE name='" + pname + "'";
          con.query(sql3, function (err, result) {
            if (err) throw err;
            let commodityid = result[0].id;
            var sql4 =
              "INSERT INTO shop_commodity (commodityid,shopid,price,link) VALUES ('" +
              commodityid +
              "','" +
              shop +
              "','" +
              pprice +
              "','" +
              plink +
              "')";
            con.query(sql4, function (err, result) {
              if (err) throw err;
              var sql5 =
                "INSERT INTO  mobile (commodityid,ram,color,warranty,weight) VALUES ('" +
                commodityid +
                "','" +
                ram +
                "','" +
                color +
                "','" +
                warranty +
                "','" +
                weight +
                "')";
              con.query(sql5, function (err, result) {
                if (err) throw err;
                res.status(200).send({
                  message: "کالا با موفقیت اضافه شد",
                  code: 200,
                });
              });
            });
          });
          // adding to shop_commodity and laptop table
        });
      }
    });
  } else {
    //tablet
    var weight = req.body.weight;
    var color = req.body.color;
    var warranty = req.body.warranty;
    var sql = "SELECT * FROM commodity  WHERE name='" + pname + "'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length != 0) {
        var commodityid = result[0].id;
        var sql2 =
          "SELECT * FROM commodity JOIN shop_commodity ON commodity.id=shop_commodity.commodityid  WHERE name='" +
          pname +
          "' AND shopid='" +
          shop +
          "'";
        con.query(sql2, function (err, result) {
          if (err) throw err;
          if (result.length != 0) {
            res.status(400).send({
              message: "this product alredy exist in shop",
              code: 400,
            });
          } else {
            var sql3 =
              "INSERT INTO shop_commodity (commodityid,shopid,price,link) VALUES ('" +
              commodityid +
              "','" +
              shop +
              "','" +
              pprice +
              "','" +
              plink +
              "')";

            con.query(sql3, function (err, result) {
              if (err) throw err;
              var sql4 =
                "SELECT MAX(price),MIN(price) FROM shop_commodity WHERE commodityid='" +
                commodityid +
                "'";
              con.query(sql4, function (err, result) {
                if (err) throw err;

                var max = result.max;
                var min = result.min;
                var sql5 =
                  "UPDATE commodity SET low_price='" +
                  min +
                  "', high_price='" +
                  max +
                  "' WHERE id='" +
                  commodityid +
                  "'";
                con.query(sql5, function (err, result) {
                  if (err) throw err;
                  res.status(200).send({
                    message: "کالا با موفقیت اضافه شد",
                    code: 200,
                  });
                });
              });
            });
          }
        });
      } else {
        var sql2 =
          "INSERT INTO commodity (name,low_price,high_price,model,type,img_link,time) VALUES ('" +
          pname +
          "','" +
          pprice +
          "','" +
          pprice +
          "','" +
          model +
          "','tablet','" +
          pimglink +
          "','" +
          time +
          "')";
        con.query(sql2, function (err, result) {
          if (err) throw err;
          var sql3 = "SELECT * FROM commodity WHERE name='" + pname + "'";
          con.query(sql3, function (err, result) {
            if (err) throw err;

            let commodityid = result[0].id;
            console.log(result);
            console.log(commodityid);
            var sql4 =
              "INSERT INTO shop_commodity (commodityid,shopid,price,link) VALUES ('" +
              commodityid +
              "','" +
              shop +
              "','" +
              pprice +
              "','" +
              plink +
              "')";
            con.query(sql4, function (err, result) {
              if (err) throw err;
              var sql5 =
                "INSERT INTO  mobile (commodityid,ram,color,warranty,weight) VALUES ('" +
                commodityid +
                "','" +
                ram +
                "','" +
                color +
                "','" +
                warranty +
                "','" +
                weight +
                "')";
              con.query(sql5, function (err, result) {
                if (err) throw err;
                res.status(200).send({
                  message: "کالا با موفقیت اضافه شد",
                  code: 200,
                });
              });
            });
          });
          // adding to shop_commodity and laptop table
        });
      }
    });
  }
});
module.exports = router;
