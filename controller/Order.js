const { User } = require("../model/User");
const { Order } = require("../model/Order");

exports.fetchOrderById = async (req, res) => {
  //const {id} = req.params;
  //const { id } = req.id;
  const { id } = req.query;

  console.log("user", id);
  try {
    const order = await Order.find({ user: id });
    res.status(200).json(order);
  } catch (err) {
    res.status(401).json(err);
  }
};

exports.CreateOrder = async (req, res) => {
  const order = new Order(req.body);
  
  try {
    const doc = await order.save();
    //const result = await doc.populate('product');
    res.status(201).json(doc);
  } catch (err) {
    console.log("err", err);
    res.status(400).json(err);
  }
};


exports.updateOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    let order = await Order.findByIdAndUpdate(id, req.body, { new: true });
    let updtOrder = await Order.save(order);
    res.status(200).json(updtOrder);
  } catch (err) {
    res.status(401).json(err);
  }
};

exports.deleteFromOrder = async (req, res) => {
  const { id } = req.params;
  try {
    let doc = await Order.findByIdAndDelete(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
