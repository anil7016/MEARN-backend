const { Cart } = require("../model/Cart");

exports.CreateCart = async (req, res) => {
  //const {id} = req.user;
  console.log('postData', req)
  const cart = new Cart({...req.body});
  try {
    const doc = await cart.save();
    const result = await doc.populate('product');
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.FetchAllCart = async (req, res) => {

  let query = Product.find({});

  try {
    const docs = await query.exec();
    res.status(200).json(docs);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchCartById = async (req, res) => {
  const {id} = req.params; 
  try {
    //let cart = await Cart.findById(id);
    const cartItems = await Cart.find({ user: id }).populate('product');
    res.status(200).json(cartItems);
  } catch (err) {
    res.status(401).json(err);
  }
};

exports.updateCartById = async (req, res) => {
  const {id} = req.params; 
  try {
    let cart = await Cart.findByIdAndUpdate(id, req.body, {new:true});
    let updtCart = await Cart.save(cart)
    res.status(200).json(updtCart);
  } catch (err) {
    res.status(401).json(err);
  }
};
