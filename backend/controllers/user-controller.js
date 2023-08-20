const User = require("../dao/user-dao.js");

const userFunc = {};

userFunc.getUserByID = async (req, res) =>{
    await User.findById(req.query.id)
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

userFunc.createUser = async (req, res) => {
    const user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        starcomm_addr: req.body.starcomm_addr
    };

    await User.create(user)
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}


module.exports = userFunc;