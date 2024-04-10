const express = require("express");
const connectDatabase = require("./Config/db");
const cors = require("cors");
const postRouter = require("./Routes/post.route");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", postRouter);

connectDatabase().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
