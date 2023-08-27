const { Category } = require("../model/Category");

exports.FetchAllCategory = async (req, res) => {

  let query = Category.find({});
  try {
    const docs = await query.exec();
    res.status(200).json(docs);
  } catch (err) {
    res.status(401).json(err);
  }
};

exports.CreateCategory = async (req, res) => {
  const category = new Category(req.body);

  try {
    const doc = await category.save()
    res.status(201).json(doc);
  }catch(err){
    res.status(401).json(err);
  }

};