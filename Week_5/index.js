const express = require("express");
const app = express();

// Addition endpoint: /sum?a=2&b=3  →  {"ans": 5}
app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a); // convert string "2" to number 2
  const b = parseInt(req.query.b);
  res.json({ ans: a + b });
});

// Multiplication endpoint: /multiply?a=2&b=3 → {"ans": 6}
app.get("/multiply", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({ ans: a * b });
});

// Division endpoint: /divide?a=6&b=3 → {"ans": 2}
app.get("/divide", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({ ans: a / b });
});

// Subtraction endpoint: /subtract?a=6&b=3 → {"ans": 3}
app.get("/subtract", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({ ans: a - b });
});

// Start server at http://localhost:3000
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
