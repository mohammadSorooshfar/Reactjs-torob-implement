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
  const jwt = require('jsonwebtoken');
  const dotenv = require('dotenv');
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
router.put("/change_profile", authenticateToken,function(req, res) {
    var email=req.body.email;
    var Oldusername=req.body.oldusername;
    var Newusername=req.body.newusername;
    var phone_number=req.body.number;
    var sql="SELECT * FROM user where username='"+Newusername+"'";

    con.query(sql,function(err,result){
      if(err) throw err;
      if(result.length!=0){
        res.status(400).send({
          message:"this username alredy exist",
          code:400
        })
      }else{
        sql="UPDATE user SET email='"+email+"',username='"+Newusername+"',phone_number='"+phone_number+"' where username='"+Oldusername+"'";
       // console.log(sql);
        con.query(sql,function(err,result){
          if(err) throw err;
          res.status(200).send({
            message:"Changes made successfully",
            code:200
          })
        })
      }
    })

  
});
router.post("/add_product",authenticateToken,function(req, res){
      var pname=req.body.pname;
      var pprice=req.body.pprice;
      var plink=req.body.plink;
      var pimglink=req.body.pimglink;
      var ram=req.body.ram;
      var shop=req.body.shopid;
      var model=req.body.model;
      var type=req.body.type;
      var date=new Date();
      var time=date.getTime();
      if(type="laptop"){
        var cpu=req.body.cpu;
        var gpu=req.body.gpu;
        var page_dimensions=req.body.page_dimensions;
        var sql="SELECT * FROM commodity  WHERE name='"+pname+"'";

        con.query(sql,function(err,result){
          if(err) throw err;
          if(result.length!=0){
            var commodityid=result[0].commodityid;
            var sql2="SELECT * FROM commodity JOIN shop_commodity ON commodity.id=shop_commodity.commodityid  WHERE name='"+pname+"' shopid='"+shop+"'";
            con.query(sql2,function(err,result){
              if(err) throw err;
              if(result.length!=0){
                res.status(400).send({
                  message:"this product alredy exist in shop",
                  code:400
                })
              }else{
                    var sql3="INSERT INTO shop_commodity (commodityid,shopid,price,link) VALUES ('"+commodityid+"','"+shop+"','"+pprice+"','"+plink+"')";
                    console.log(sql3);
                    con.query(sql3,function(err,result){
                      if(err) throw err;
                      var sql4="SELECT MAX(price),MIN(price) FROM shop_commodity WHERE commodityid='"+commodityid+"'";
                      con.query(sql4,function(err,result){
                        if(err) throw err;
                        console.log(result);
                        var max=result.max;
                        var min=result.min;
                        var sql5="UPDATE commodity SET low_price='"+min+"' high_price='"+max+"' WHERE commodityid='"+commodityid+"'";
                        con.query(sql5,function(err,result){
                          if(err) throw err;
                          res.status(200).send({
                            message:"adding product successful",
                            code:200
                          })
                        })
                      })
                    })
              }
            })
          }else{
                var sql2="INSERT INTO commodity (name,low_price,high_price,model,type,img_link,time) VALUES ('"+pname+"','"+pprice+"','"+pprice+"','"+model+",'laptop','"+pimglink+"','"+time+"')";
                con.query(sql2,function(err,result){
                    if(err) throw err;
                    // adding to shop_commodity and laptop table
                })
          }
        })
      }else if(type="mobile"){
        var weight=req.body.weight;
        var color=req.body.color;
        var warranty=req.body.warranty;
        var sql="SELECT * FROM commodity  WHERE name='"+pname+"'";
        con.query(sql,function(err,result){
          if(err) throw err;
          if(result.length!=0){
            var commodityid=result[0].commodityid;
            var sql2="SELECT * FROM commodity JOIN shop_commodity ON commodity.id=shop_commodity.commodityid  WHERE name='"+pname+"' shopid='"+shop+"'";
            con.query(sql2,function(err,result){
              if(err) throw err;
              if(result.length!=0){
                res.status(400).send({
                  message:"this product alredy exist in shop",
                  code:400
                })
              }else{
                    var sql3="INSERT INTO shop_commodity (commodityid,shopid,price,link) VALUES ('"+commodityid+"','"+shop+"','"+pprice+"','"+plink+"')";
                    console.log(sql3);
                    con.query(sql3,function(err,result){
                      if(err) throw err;
                      var sql4="SELECT MAX(price),MIN(price) FROM shop_commodity WHERE commodityid='"+commodityid+"'";
                      con.query(sql4,function(err,result){
                        if(err) throw err;
                        console.log(result);
                        var max=result.max;
                        var min=result.min;
                        var sql5="UPDATE commodity SET low_price='"+min+"' high_price='"+max+"' WHERE commodityid='"+commodityid+"'";
                        con.query(sql5,function(err,result){
                          if(err) throw err;
                          res.status(200).send({
                            message:"adding product successful",
                            code:200
                          })
                        })
                      })
                    })
              }
            })
          }else{
            var sql2="INSERT INTO commodity (name,low_price,high_price,model,type,img_link,time) VALUES ('"+pname+"','"+pprice+"','"+pprice+"','"+model+",'mobile','"+pimglink+"','"+time+"')"
          }
        })
      }else{
        //tablet
        var weight=req.body.weight;
        var color=req.body.color;
        var warranty=req.body.warranty;
        var sql="SELECT * FROM commodity  WHERE name='"+pname+"'";
        con.query(sql,function(err,result){
          if(err) throw err;
          if(result.length!=0){
            var commodityid=result[0].commodityid;
            var sql2="SELECT * FROM commodity JOIN shop_commodity ON commodity.id=shop_commodity.commodityid  WHERE name='"+pname+"' shopid='"+shop+"'";
            con.query(sql2,function(err,result){
              if(err) throw err;
              if(result.length!=0){
                res.status(400).send({
                  message:"this product alredy exist in shop",
                  code:400
                })
              }else{
                    var sql3="INSERT INTO shop_commodity (commodityid,shopid,price,link) VALUES ('"+commodityid+"','"+shop+"','"+pprice+"','"+plink+"')";
                    console.log(sql3);
                    con.query(sql3,function(err,result){
                      if(err) throw err;
                      var sql4="SELECT MAX(price),MIN(price) FROM shop_commodity WHERE commodityid='"+commodityid+"'";
                      con.query(sql4,function(err,result){
                        if(err) throw err;
                        console.log(result);
                        var max=result.max;
                        var min=result.min;
                        var sql5="UPDATE commodity SET low_price='"+min+"' high_price='"+max+"' WHERE commodityid='"+commodityid+"'";
                        con.query(sql5,function(err,result){
                          if(err) throw err;
                          res.status(200).send({
                            message:"adding product successful",
                            code:200
                          })
                        })
                      })
                    })
              }
            })
          }else{
            var sql2="INSERT INTO commodity (name,low_price,high_price,model,type,img_link,time) VALUES ('"+pname+"','"+pprice+"','"+pprice+"','"+model+",'tablet','"+pimglink+"','"+time+"')"
          }
        })
      }
})
module.exports = router;