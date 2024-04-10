const express = require("express");
const route = express.Router();
const FormData = require("../Models/FormData");
const CountData = require("../Models/CountData");

const postRouter = express.Router();

const updateCount = async (type) => {
  if (type == "add") {
    await CountData.findOneAndUpdate(
      {},
      { $inc: { addCount: 1 } },
      { upsert: true }
    );
  } else if (type == "update") {
    await CountData.findOneAndUpdate(
      {},
      { $inc: { updateCount: 1 } },
      { upsert: true }
    );
  }
};

// to GET all Data
postRouter.get("/", async (req, res) => {
  try {
    const users = await FormData.find(req.query);
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// to GET all Count
postRouter.get("/count", async (req, res) => {
  try {
    const count = await CountData.find(req.query);
    res.status(200).send(count);
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// to POST new Data
postRouter.post("/create", async (req, res) => {
  const data = req.body;
  try {
    const formData = new FormData(data);
    await formData.save();
    await updateCount("add");
    res.status(201).json({ message: "Form data saved successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to save form data" });
  }
});

//to GET single user
postRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await FormData.findOne({ _id: id });
  try {
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ error: err });
  }
});

//to update exist user
postRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await FormData.findByIdAndUpdate({ _id: id }, req.body);
    await updateCount("update");
    res.status(200).send({ msg: `name update with ${id}` });
  } catch (err) {
    res.status(400).sendStatus({ error: err });
  }
});

module.exports = postRouter;
