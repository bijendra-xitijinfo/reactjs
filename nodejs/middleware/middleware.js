const jwt = require('jsonwebtoken');

const userVarification = async (req, res, next) => {
    try {
        if(!req.headers.authorization) {
            res.status(401).send('Login first please');
        }
        const token = req.headers.authorization.split(' ')[1];
        req.user = jwt.verify(token, "user");
        next();
    } catch (err) {
        res.send(err);
    }
}

module.exports = {
    userVarification,
};