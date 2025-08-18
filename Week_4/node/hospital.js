const express = require("express");
const app = express();

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

/*
  GET request
  - Fetch the number of kidneys, healthy kidneys, and unhealthy kidneys
  - You can also pass query parameters if needed
*/
app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;

  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }

  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

/*
  POST request
  - Add a new kidney (healthy/unhealthy)
  - Data is sent in the request body
*/
app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

/*
  PUT request
  - Make ALL kidneys healthy
  - Example of updating resources
*/
app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    msg: "All kidneys are now healthy",
  });
});

/*
  DELETE request
  - Remove all unhealthy kidneys
  - Only works if there is at least one unhealthy kidney
  - Else return 411 (custom error)
*/
app.delete("/", function (req, res) {
  if (isThereAtleastOneUnhealthyKidney()) {
    // Better way: use filter instead of manual loop
    users[0].kidneys = users[0].kidneys.filter((kidney) => kidney.healthy);

    res.json({ msg: "Removed all unhealthy kidneys" });
  } else {
    res.status(411).json({
      msg: "You have no bad kidneys",
    });
  }
});

/*
  Helper function
  - Checks if there's at least one unhealthy kidney
*/
function isThereAtleastOneUnhealthyKidney() {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      return true;
    }
  }
  return false;
}

// Start server
app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
