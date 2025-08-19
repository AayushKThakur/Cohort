const express = require("express");
const app = express();

//AMUSEMENT PARK WITH RIDES
// Middleware is  the ticket checker or age checker
//The response is only suppose to do the ride

//function that returns a boolean if the age of the person is more than 14
// function isOldEnough(age) {
//   if (age >= 14) {
//     return true;
//   } else {
//     return false;
//   }
// }

// app.get("/ride0", function (req, res) {
//   if (isOldEnough(req.query.age)) {
//     res.json({
//       msg: "You have succefully riden the ride 2",
//     });
//   } else {
//     res.status(411).json({
//       msg: "sorry you are not of age yet",
//     });
//   }
// });

//middleware function which has access to next middleware function
function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "sorry you are not of age yet",
    });
  }
}

//so now the purpose of route is only to worry about to do the ride,
// or give a response
app.get("/ride0", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "You have successfully riden the ride 0",
  });
});
////////////////////////////////////////////////////////////
function ticketChecker(req, res, next) {
  const ticket = req.query.ticket;
  if (ticket === "free") {
    next();
  } else {
    res.status(403).send("Access denied");
  }
}

app.use(ticketChecker);
//1st middleware to go throgh for each route, mentioned below this, instead of mentioning every time

app.get("/ride1", function (req, res) {
  res.send("You rode the first ride!");
});

app.get("/ride2", function (req, res) {
  res.send("You rode the second ride!");
});

app.get("/ride3", function (req, res) {
  res.send("You rode the third ride!");
});

app.listen(3000);
