//so JWT essentially prevents 1 round trip from the backend
// server and DB for any user request

const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "USER_APP";
const app = express();
app.use(express.json()); //middleware, will help you parse and post body, when done req.body

const users = [];

app.post("/signup", function (req, res) {
  //later: input validations using zod for username and pw.
  const username = req.body.username;
  const password = req.body.password;

  //check for : already signed in users
  //   if(users.find(u => u.username ===username)){
  //     res.json({
  //         message: "You are Already signed up "
  //     })
  //     return
  //   }

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "You are signed up",
  });
  console.log(users);
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  //maps and filter
  let foundUser = null; //instance of the user ; the in memory for the user

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      foundUser = users[i];
    }
  }

  if (foundUser) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );

    //foundUser.token = token;
    //not storing the token in the database anymore

    res.json({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }

  console.log(users);
});

app.get("/me", function (req, res) {
  //checking the token for the existence of the username
  const token = req.headers.token;

  const decodedInformation = jwt.verify(token, JWT_SECRET); //{username: .....}
  const username = decodedInformation.username;

  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username) {
      foundUser = users[i];
    }
  }
  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  } else {
    res.json({
      message: "Token invalid",
    });
  }
});

app.listen(3000);
// the https server is listening on port 3000
