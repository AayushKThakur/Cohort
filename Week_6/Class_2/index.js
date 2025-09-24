const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "akt123";

const app = express();
app.use(express.json());

const users = [];

function logger(req, res, next) {
  console.log(req.method + " request came");
  next();
}

app.post("/signup", logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  //we should check if a user with this username already exist
  let exists = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      exists = true;
      break;
    }
  }

  if (exists) {
    return res.status(400).json({
      message: "User already exists. Please choose another username.",
    });
  }

  users.push({
    username: username,
    password: password,
  });
  res.json({
    message: "You are signed in",
  });
});

app.post("/signin", logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      foundUser = users[i];
    }
  }

  if (!foundUser) {
    res.json({
      message: "Credentials incorrect",
    });
    return;
  } else {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );

    //sending reponse in headers
    res.header("jwt", token);
    res.header("random", "aayush");

    res.json({
      token: token,
    });
  }
});

//Auth Middleware
function auth(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData.username) {
    //req object here is same as req object in the /me function,
    // so req.username is accessible in the next middleware.
    // so that they can recognize the user.
    req.username = decodedData.username;
    next();
  } else {
    res.json({
      message: "You are not logged in",
    });
  }
}

app.get("/me", logger, auth, function (req, res) {
  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === req.username) {
      foundUser = users[i];
    }
  }

  res.json({
    username: foundUser.username,
    password: foundUser.password,
  });
});

app.listen(3000);
