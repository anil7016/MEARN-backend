const express = require('express');
const server = express();
const { mongoose } = require('mongoose');
const cors = require('cors');
const { CreateProduct, FetchAllProducts } = require('./controller/Product');
const productsRouter = require('./routes/Products');
const categoryRouter = require('./routes/Category');
const brandsRouter = require('./routes/Brands');
const usersRouter = require('./routes/Users');
const CartRouter = require('./routes/Cart');
const ordersRouter = require('./routes/Order');
const authRouter = require('./routes/Auth');

const uri = "mongodb+srv://anilkanhasoft:Anil%40567@cluster0.12fko2j.mongodb.net/shop?retryWrites=true&w=majority";

const main = async () => {
    await mongoose.connect(uri);
}
main(
    console.log('conn establised')
).catch( err => console.log('error',err) )

server.use(cors({exposedHeaders: ['X-Total-Count']}))
server.use( express.json() )
server.use( '/products', productsRouter.router )
server.use( '/categories', categoryRouter.router )
server.use( '/brands', brandsRouter.router )
server.use( '/auth', authRouter.router )
server.use( '/cart', CartRouter.router )
server.use( '/users', usersRouter.router )
server.use( '/orders', ordersRouter.router )
//server.use( '/fetchAllProducts', productsRouter.router )

server.get('/', (req, res)=>{
    res.json({status:'success'});
})

//server.post('/products', CreateProduct);
//server.get('/fetchAllProducts', FetchAllProducts);
//server.get('/fetchAllUsers', FetchAllUsers);

// server.post('/products', (req, res)=>{
//     res.json({status:'success'});
// })

server.listen(8080, ()=>{
    console.log('server started')
})

