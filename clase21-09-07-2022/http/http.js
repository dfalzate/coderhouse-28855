// import http from "http";
// import axios from "axios";
import got from "got";
// /* ----------------------------------- HTTP GET ---------------------------------- */
// const options1 = {
//   hostname: "localhost",
//   port: 3000,
//   path: "/news",
//   method: "get",
// };

// const request1 = http.request(options1, (res) => {
//   console.log(res.statusCode);
//   res.on("data", (data) => {
//     console.log(data);
//     process.stdout.write(data);
//   });
// });

// request1.on("error", (error) => {
//   console.log(error);
// });

// request1.end();

// /* ---------------------------------- HTTP POST ---------------------------------- */

// const data = new TextEncoder().encode(
//   JSON.stringify({
//     title: "News 4",
//     body: "Body news ",
//     author: "Author 4",
//     image: "https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg",
//   }),
// );

// const options2 = {
//   hostname: "localhost",
//   port: 3000,
//   path: "/news",
//   method: "post",
//   headers: {
//     "Content-Type": "application/json",
//     "Content-Length": data.length,
//   },
// };

// const request2 = http.request(options2, (res) => {
//   res.on("data", (data) => {
//     process.stdout.write(data);
//   });
// });

// request2.on("error", (err) => console.log(err));
// request2.write(data);
// request2.end();

// /* ------------------------------- HTTP UPDATE ------------------------------ */

// const update = new TextEncoder().encode(
//   JSON.stringify({
//     title: "News 1",
//     body: "Body news 1",
//     author: "Author 1",
//     image: "https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg",
//   }),
// );

// const option3 = {
//   hostname: "localhost",
//   port: 3000,
//   path: "/news/1",
//   method: "patch",
//   headers: {
//     "Content-Type": "application/json",
//     "Content-Length": data.length,
//   },
// };

// const request3 = http.request(options2, (res) => {
//   res.on("data", (data) => {
//     process.stdout.write(data);
//   });
// });

// // request3.on("error", (err) => console.log(err));
// // request3.write(update);
// // request3.end();

// /* ------------------------------- HTTP DELETE ------------------------------ */
// const options4 = {
//   hostname: "localhost",
//   port: 3000,
//   path: "/news/b5a1d5d5-2216-4580-b6b9-dc2037880bfa",
//   method: "delete",
// };

// const request4 = http.request(options4, (res) => {
//   console.log(res.statusCode);
//   res.on("data", (data) => {
//     console.log(data);
//     process.stdout.write(data);
//   });
// });

// request4.on("error", (error) => {
//   console.log(error);
// });

// // request4.end();

// /* ---------------------------------- AXIOS --------------------------------- */
// const axiosData = {
//   title: "News 5",
//   body: "Body news 5",
//   author: "Author 5",
//   image: "https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg",
// };

// async function getAxios() {
//   const response = await axios.get("http://localhost:3000/news");
//   console.log(response);
// }
// getAxios();

// async function postAxios() {
//   const response = await axios.post("http://localhost:3000/news", axiosData);
//   console.log(response);
// }
// // postAxios();

/* ----------------------------------- GOT ---------------------------------- */
const gotData = {
  title: "News 6",
  body: "Body news 6",
  author: "Author 6",
  image: "https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg",
};

async function getGot() {
  const response = await got.get("http://localhost:3000/news", { responseType: "json" });
  console.log(response);
}
getGot();

async function postGot() {
  const response = await got.post("http://localhost:3000/news", {
    json: { gotData },
    responseType: "json",
  });
  console.log(response);
}
postGot();
