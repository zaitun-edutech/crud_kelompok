var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var kelompokSchema = new Schema({
  nama: { type: String, required: true },
  kec: { type: String, required: true },
  desa: { type: String, required: true },
  usaha: { type: String, required: true },
  pemilik: { type: String, required: true },
  modal: { type: String, required: true },
  //   id_kec: { type: Schema.Types.ObjectId, ref: "kelompok", required: true },
});

module.exports = mongoose.model("kelompok", kelompokSchema);
