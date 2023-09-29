const { Cart } = require("../model/Cart");

exports.CreateCart = async (req, res) => {
  //const {id} = req.user;
  const cart = new Cart(req.body.item);
  //const cart = new Cart(req.body);
  console.log("cart", cart);

  try {
    const doc = await cart.save();
    //const result = await doc.populate("product");
    const result = await doc.populate('product');
    
    console.log('result', result)
    res.status(201).json(result);
  } catch (err) {
    console.log("err", err);
    res.status(400).json(err);
  }
};

exports.fetchCartById = async (req, res) => {
  console.log("req", req.body);
  //const {id} = req.params;
  const { user } = req.query;
  console.log("user", user);
  try {
    //let cart = await Cart.findById(id);
    //const cartItems = await Cart.find({ user: user }).populate('user').populate('product');
    const cartItems = await Cart.find({ user: user }).populate('user').populate('product');
    console.log('cartItems', cartItems)
    res.status(200).json(cartItems);
  } catch (err) {
    console.log('err', err)
    res.status(401).json(err);
  }
};

exports.updateCartById = async (req, res) => {
  const { id } = req.params;
  try {
    let cart = await Cart.findByIdAndUpdate(id, req.body, { new: true });
    let updtCart = await Cart.save(cart);
    res.status(200).json(updtCart);
  } catch (err) {
    res.status(401).json(err);
  }
};

exports.deleteFromCart = async (req, res) => {
  const { id } = req.params;
  try {
    let doc = await Cart.findByIdAndDelete(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
