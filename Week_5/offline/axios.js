//httpdumbp.app to dump all your post put get requests

// const axios = require("axios");

// async function main() {
//   const response = await fetch("https://sum-server.100xdevs.com/todos");
//   const json = await response.json();
//   console.log(json.todos.length);
// }

// async function main() {
//   const response = await axios.get("https://sum-server.100xdevs.com/todos");
//   // response.data
//   console.log(response.data.todos.length);
// }
// main();

// //POST Method
// const axios = require("axios");
// // POST
// async function main() {
//   const response1 = await fetch(
//     "https://www.toptal.com/developers/postbin/1706261117587-5522551864851",
//     {
//       method: "POST",
//       body: {
//         username: "aayush",
//         password: "123456",
//       },
//       headers: {
//         Authorization: "Bearer 123",
//       },
//     }
//   );
//   const textualData = await response.text();
//   console.log(textualData);
// }

// //axios post
// async function main() {}
// const response = await axios.post(
//   "https://www.toptal.com/developers/postbin/1706261117587-5522551864851"
// );
// console.log(response.data);
// main();

//headers in post request, the first argument is the URL you are sending the request to, along wiht any query parameters
// the second arg is your body and the third is headers

// you can not send a new body in a GET request

const axios = require("axios");
// async function main() {
//   //request config
//   const response = await axios.post(
//     "https://httpdump.app/dumps/c8ad7fcb-c9e7-44d9-8660-9945253fdb34",
//     {
//       username: "harkirat",
//       password: "1234567",
//     },
//     {
//       headers: {
//         Authorization: "Bearer 123",
//       },
//     }
//   );
//   console.log(response.data);
// }
// main();

async function main() {
  // request config
  const response = await axios({
    url: "https://httpdump.app/dumps/c8ad7fcb-c9e7-44d9-8660-9945253fdb34?a=b",
    method: "POST",
    headers: {
      Authorization: "Bearer 123",
    },
    data: {
      username: "harkirat",
    },
  });
  console.log(response.data);
}
main();
