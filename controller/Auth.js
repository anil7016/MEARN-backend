const { User } = require("../model/User");

exports.CreateUser = (req, res) => {
  const user = new User(req.body);
  try{
    const doc = user.save();
    res.status(200).json(doc);
  }catch(err){
    res.status(401).json(err)
  }

};

exports.LoginUser = (req, res) => {
  //const user = new User(req.body);
  
  try{
    const user = User.findOne({email: req.body.email}, 'id name email');
    if(user.password === req.body.password){
      res.status(200).json(user);
    }else{
      res.status(401).json({message: 'invalid credential'});
    }
  }catch(err){
    res.status(401).json(err)
  }

};