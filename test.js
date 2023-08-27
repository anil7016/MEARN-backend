const mongoose = require('mongoose');

const uri = "mongodb+srv://anilkanhasoft:Anil%40567@cluster0.12fko2j.mongodb.net/shop?retryWrites=true&w=majority";

mongoose.connect(uri)

const productSchema = new mongoose.Schema({
  name: String,
  company: String,
  price: Number,
  colors: [String],
  image: String,
  category: String,
  isFeatured: Boolean,
})

const productDb = new mongoose.model('Product', productSchema);

const dbConnect = async () => {
  try{

    const data = await productDb.find({price:{$gt:1000}});

      console.log('data',data)

    }catch(error){
    console.log('error',error)
  }
}

dbConnect()