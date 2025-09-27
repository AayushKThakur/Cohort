const express = require("express");
const { UserModel, TodoModel } = require("./db");
//importing models from the db, to insert data
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");

mongoose.connect(
  "mongodb+srv://akt_01:e8Mzm4skbkNWzs4C@cluster0.wczsrtx.mongodb.net/Todo"
);

const app = express();
app.use(express.json()); //middleware to prase json body

app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  //this is an async operation, which returns a promise
  await UserModel.create({
    email: email,
    password: password,
    name: name,
  });

  res.json({
    message: "You are logged in",
  });
});

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    //getting something from db, so await
    email: email,
    password: password,
  });

  console.log(user);

  if (user) {
    const token = jwt.sign(
      {
        id: user._id.toString(), //payload, is id, tostring to encode the object id into string
      },
      JWT_SECRET //secret or private key
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
});

app.post("/todo", auth, async (req, res) => {
  const userId = req.userId;
  const title = req.body.title;
  await TodoModel.create({
    title,
    userId,
  });

  res.json({
    message: "Todo Created",
  });
});

app.get("/todos", auth, async (req, res) => {
  const userId = req.userId;

  const todos = await TodoModel.find({
    userId,
  });

  res.json({
    todos,
  });
});

app.listen(3000);
