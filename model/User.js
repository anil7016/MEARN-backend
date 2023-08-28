const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: 'user' },
  address: { type: [Schema.Types.Mixed] },
  //name: { type: String },
  orders: { type: [Schema.Types.Mixed] },
  
});

const virtual = userSchema.virtual("id");

virtual.get(() => {
  return this._id;
});

userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete this._id;
  },
});

exports.User = mongoose.model("user", userSchema);