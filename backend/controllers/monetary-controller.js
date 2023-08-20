const Monetary = require('../dao/monetary-dao.js');

const monetaryFunc = {}

monetaryFunc.getMonetaryByUserId = async (req, res) => {
    await Monetary.find({ user_id: req.query.user_id })
        .then((monetary) => {
            res.status(200).json(monetary);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

monetaryFunc.createMonetary = async (req, res) => {
    const monetary = {
        user_id: req.body.user_id,
        balance: req.body.balance,
        method_name: req.body.method_name
    };

    await Monetary.create(monetary)
        .then((monetary) => {
            res.status(200).json(monetary);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

module.exports = monetaryFunc;