const express = require("express");
const cors = require("cors");
require("dotenv").config();

const askRoute = require("./routes/askRoute");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/ask", askRoute);

app.get("/", (req, res, next) => {
  res.send("Ai Agent Pipeline Running ");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
  console.log(`server running on http://localhost:${PORT}`);
});