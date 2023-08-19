const UserController = require("../dao/user-dao.js");
const UUID = require("uuidv4");

const userFunc = {};

function getAllUsers(req, res) {
    UserController.find()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

function createUser(req, res) {
    const user = {
        user_id: UUID.uuid(),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        starcomm_addr: req.body.starcomm_addr
    };

    UserController.create(user)
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}


userFunc.getAllUsers = getAllUsers;
userFunc.createUser = createUser;

module.exports = userFunc;