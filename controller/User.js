const { User } = require("../model/User");

exports.CreateUser = (req, res) => {
  const user = new User(req.body);
  user.save((err, doc) => {
    console.log({ err, doc });
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(doc);
    }
  });
};

exports.fetchUserById = async (req, res) => {
  const {id} = req.params; 
  try {
    let user = await User.findById(id, 'id email addresses').exec();
    res.status(200).json(user);
  } catch (err) {
    res.status(401).json(err);
  }
};

exports.updateUserById = async (req, res) => {
  const {id} = req.params; 
  try {
    let user = await User.findByIdAndUpdate(id, req.body, {new:true});
    let updtUser = await User.save(user)
    res.status(200).json(updtUser);
  } catch (err) {
    res.status(401).json(err);
  }
};
