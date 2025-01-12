const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema({
  token:{
    type:String,
    required:true,
    unique:true,
  },
  createdAT:{
    type:Date,
    default: Date.now,
    expires: 86400 //24hours
  }
});

module.exports = mongoose.model("BlacklistToken",blacklistTokenSchema);