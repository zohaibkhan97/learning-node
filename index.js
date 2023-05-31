const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const newMiddleware = (req, res, next) => {
  console.log(req);
  //**next will help you to call the other middleware after this */
  next();
};

app.use(express.static(path.join(__dirname, "public")));
// app.use(newMiddleware)
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// app.get('/about', (req, res) => {
//     res.send(`I'm here for nodejs`)
//   })
// app.get('/about', (req, res) => {
//     res.json({Express: 2})
//   })
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
