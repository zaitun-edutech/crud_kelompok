var mongoose = require("mongoose");
var Kelompok = require("../models/Kelompok");
// var Kecamatan = require("../models/Kecamatan");

var kelompokController = {};

kelompokController.save = function (req, res) {
  //   var kelompok = new Kelompok(req.body);

  var kelompok = new Kelompok({
    nama: req.body.nama,
    kec: req.body.kec,
    desa: req.body.desa,
    usaha: req.body.usaha,
    pemilik: req.body.pemilik,
    modal: req.body.modal,
  });

  kelompok.save(function (err) {
    if (err) {
      console.log(err);
      res.render("index");
    } else {
      console.log("save sukses");
      res.redirect("/kelompok");
    }
  });
};
// //hapus data
// kelompokController.delete = function (req, res) {
//   Kelompok.findOne({ _id: req.params._id }, function (err, row) {
//     if (row) {
//       console.log(row);
//       Kelompok.remove({ _id: req.params._id }, function (err) {
//         if (err) {
//           console.log("delete error", err);
//         } else {
//           console.log("delete sukses");
//           res.redirect("http://localhost:3000");
//         }
//       });
//     } else {
//       res.redirect("http://localhost:3000");
//     }
//   });
// };
module.exports = kelompokController;
