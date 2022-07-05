const jwt = require("jsonwebtoken");
const authRequest = (req, res, next) => {
  try {
    const token = req?.headers?.authorization?.split(" ")[1];
    const user = jwt.verify(token, "abc");

    req["user"] = user;
    next();
  } catch (err) {
      res.status(500).send(err.message);
  }
};

module.exports = authRequest