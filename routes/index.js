var express = require('express');
var router = express.Router();
const bcrypt = require("bcrypt");
const UserRegistration = require('../Models/userRegistration');
const UserProduct = require('../Models/productSchema');



/* GET home page. */
router.post('/registerdata',async function (req,res,next) {
  try {
    // const dataUsers = await UserRegistration.create(req.body);
    const password = req.body.password;
    const con_password = req.body.con_password;

    const passwordhash = bcrypt.hashSync(password, 10);
    const con_passwordhash = bcrypt.hashSync(con_password,10);



     const data = {
      name : req.body.name,
      email : req.body.email,
      password : passwordhash,
      con_password : con_passwordhash
    
     }

     const dataUsers = await UserRegistration.create(data)
    
     if(passwordhash == con_passwordhash)
     {
   
    res.status(201).json({
      status : "Sucess",
      data : dataUsers
    })
  }
  else{
    console.log("Password is not match");
  }
    
  } catch (error) {
    res.json({
      error
    })
  }
});

router.post('/login',async function (req,res,next) {
  try {
    const password = req.body.password;
    const con_password = req.body.con_password;
    const loginData = await UserRegistration.findOne({email:req.body.email})

  bcrypt.compareSync(password,con_password)

    if(password == loginData.password)
    {
      res.status(201).json({
        "status":"Sucess",
        data : loginData
      })
    }
    else{
      console.log("Incorrect Password");
    }
  } catch (error) {
    res.json({
      error
    })
  }
});


router.post('/createProduct',async function (req,res,next) {
  try {
    const productData = await UserProduct.create(req.body);

    res.status(201).json({
      "status" : "Sucess",
      data : productData
    })
  } catch (error) {
    res.json({
      error
    })
  }
});

router.post('/getProduct',async function (req,res,next) {
  try {
    const getProduct = await UserProduct.find();

    res.status(201).json({
      "status" : "Sucess",
      data : getProduct
    })
  } catch (error) {
    res.json({
      error
    })
  }
});

router.post('/getProductData/:id',async function (req,res,next) {

  try {
    const getProduct = await UserProduct.findById(req.params.id);

    res.status(201).json({
      "status" : "Sucess",
      data : getProduct
    })
  } catch (error) {
    res.json({
      error
    })
  }
  
})

module.exports = router;
