
const mongoose = require('mongoose');
const {Schema} = mongoose;

const brandSchema = new mongoose.Schema({
    value: String,
    label: String,
    checked: Boolean
  });

  const virtual = brandSchema.virtual('id');
  
  virtual.get( () => {
    return this._id;
  })

  brandSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function( doc, ret ) { delete this._id }
  })

exports.Brand = mongoose.model('brand', brandSchema)

