/**
 * 📌 FETCH vs AXIOS Cheatsheet with Error Handling + Query Params
 * One file to learn the basics of making API requests
 */

const axios = require("axios");

// -----------------------------
// 1. FETCH: GET request
// -----------------------------
// Fetch needs response.json() to parse data
async function fetchGetExample() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json(); // must parse JSON
    console.log("FETCH GET:", data);
  } catch (error) {
    console.error("FETCH GET Error:", error.message);
  }
}

// -----------------------------
// 2. AXIOS: GET request
// -----------------------------
// Axios gives data directly in res.data
async function axiosGetExample() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log("AXIOS GET:", res.data);
  } catch (error) {
    console.error("AXIOS GET Error:", error.message);
  }
}

// -----------------------------
// 3. FETCH: POST request
// -----------------------------
// With fetch: set headers + stringify body
async function fetchPostExample() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Hello", body: "World" }),
    });
    const data = await response.json();
    console.log("FETCH POST:", data);
  } catch (error) {
    console.error("FETCH POST Error:", error.message);
  }
}

// -----------------------------
// 4. AXIOS: POST request
// -----------------------------
// With axios: pass JS object directly
async function axiosPostExample() {
  try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "Hello",
      body: "World",
    });
    console.log("AXIOS POST:", res.data);
  } catch (error) {
    console.error("AXIOS POST Error:", error.message);
  }
}

// -----------------------------
// 5. FETCH: GET with Query Params
// -----------------------------
// Query params = extra info in URL (like search filters)
async function fetchQueryExample() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    const data = await response.json();
    console.log("FETCH Query Params:", data);
  } catch (error) {
    console.error("FETCH Query Error:", error.message);
  }
}

// -----------------------------
// 6. AXIOS: GET with Query Params
// -----------------------------
// Axios has a params option instead of manually adding to URL
async function axiosQueryExample() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts", {
      params: { userId: 1 }, // axios builds ?userId=1 automatically
    });
    console.log("AXIOS Query Params:", res.data);
  } catch (error) {
    console.error("AXIOS Query Error:", error.message);
  }
}

// -----------------------------
// Run all examples
// -----------------------------
async function runAll() {
  await fetchGetExample();
  await axiosGetExample();
  await fetchPostExample();
  await axiosPostExample();
  await fetchQueryExample();
  await axiosQueryExample();
}

runAll();
