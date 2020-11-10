const jwt = require("jsonwebtoken");
const { jwtSecret } = require("./secrets");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ message: "we want the token" });
    return;
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      console.log("Decoded error -> ", err);
      res.status(401).json({ message: "token is bad" });
      return;
    }

    console.log("Decoded token -> ", decoded);
    req.decodedJwt = decoded;
    next();
  });
};
