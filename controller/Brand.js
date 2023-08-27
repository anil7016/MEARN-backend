const { Brand } = require("../model/Brand");


exports.FetchAllBrands = async (req, res) => {

  try {
    const brands = await Brand.find({}).exec();
    res.status(200).json(brands);
  } catch (err) {
    res.status(401).json(err);
  }
};

exports.CreateBrand = async (req, res) => {
  const brand = new Brand(req.body);
  try {
    const doc = await brand.save();
    res.status(201).json(doc);
  }catch(err){
    req.status(401).json(err)
  }

};
