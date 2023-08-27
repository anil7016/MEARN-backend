const { Product } = require("../model/Product");

exports.CreateProduct = (req, res) => {
  const product = new Product(req.body);

  product.save((err, doc) => {
    console.log({ err, doc });
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(doc);
    }
  });
};

exports.FetchAllProducts = async (req, res) => {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}
  // pagination = {_page:1,_limit=10}

  let query = Product.find({});
  let totalProductsQuery = Product.find({});

  if (req.query.category) {
    query = query.find({ category: { $in: req.query.category.split(",") } });
    totalProductsQuery = totalProductsQuery.find({ category: { $in: req.query.category.split(",") } });
    
  }
  if (req.query.brand) {
    query =  query.find({ brand: req.query.brand });
  }
  if (req.query._sort && req.query._order && req.query._page) {
    await query.sort({ [req.query._sort]: req.query._order });
  }

  //const totalDocs = await totalProductsQuery.count.exec();
  const totalDocs = await totalProductsQuery.count().exec();

  if (req.query._page && req.query._limit) {
    const pageSize = req.query._limit;
    const page = req.query._page;
    await query.skip(pageSize * (page - 1));
  }

  console.log('totalDocs',totalDocs)

  try {
    const docs = await query.exec();
    res.set('X-Total-Count', totalDocs)
    res.status(200).json(docs);
  } catch (err) {
    res.status(401).json(err);
  }
};

exports.fetchProductById = async (req, res) => {
  const {id} = req.params; 
  try {
    let product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(401).json(err);
  }
};

exports.updateProductById = async (req, res) => {
  const {id} = req.params; 
  try {
    let product = await Product.findByIdAndUpdate(id, req.body, {new:true});
    let updtProduct = await Product.save(product)
    res.status(200).json(updtProduct);
  } catch (err) {
    res.status(401).json(err);
  }
};
