
const mongoose = require('mongoose');
const {Schema} = mongoose;

const categorySchema = new mongoose.Schema({
    value: String,
    label: String,
    checked: Boolean
  });

  const virtual = categorySchema.virtual('id');
  
  virtual.get( () => {
    return this._id;
  })

  categorySchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function( doc, ret ) { delete this._id }
  })

exports.Category = mongoose.model('category', categorySchema)

