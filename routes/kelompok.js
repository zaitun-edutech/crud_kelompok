var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Kelompok = require("../models/Kelompok");
var kelompok = require("../controllers/KelompokController.js");
/* GET home page. */
router.get("/", function (req, res, next) {
  Kelompok.find({}, function (err, kelompok) {
    res.render("kelompok/index", {
      kelompok: kelompok,
      title: "Data kelompok",
    });
  });
});

router.get("/add", function (req, res, next) {
  res.render("kelompok/add", {
    title: "Tambah Inputan Data Kelompok",
  });
});

router.post("/insert", function (req, res) {
  kelompok.save(req, res);
});

router.get("/delete/:_id", function (req, res) {
  kelompok.delete(req, res);
});

router.get("/edit/:_id", function (req, res) {
  kelompok.edit(req, res);
});

router.post("/update/:_id", function (req, res) {
  kelompok.update(req, res);
});

module.exports = router;
