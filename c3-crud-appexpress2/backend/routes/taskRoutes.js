import express from "express";
import { enums } from "../constant/enum.js";
import Tasks from "../models/taskModel.js";

export const taskRoutes = express.Router();

taskRoutes.get("/", async (req, res) => {
  // find : for get all data from mdb
  try {
    const getAllTasks = await Tasks.find();
    res
      .status(200)
      .send({ status: 200, message: enums.SUCCESS, data: getAllTasks });
  } catch (error) {
    res.status(400).send({ status: 400, message: enums.ERROR_MSG });
  }
});

taskRoutes.post("/add", async (req, res) => {
  try {
    const data = req.body;

    const response = await Tasks.create(data);
    res
      .status(201)
      .send({ status: 201, message: enums.SUCCESS_MSG, data: response });
  } catch (error) {
    res.status(400).send({ status: 400, message: enums.ERROR_MSG });
  }
});

taskRoutes.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Tasks.findByIdAndDelete(id);
    res
      .status(200)
      .send({ status: 200, message: enums.DELETE_MSG, data: response });
  } catch (error) {
    res.status(400).send({ status: 400, message: enums.ERROR_MSG });
  }
});


taskRoutes.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;

    const response = await Tasks.findByIdAndUpdate(id, data);
    res
      .status(200)
      .send({ status: 200, message: enums.UPDATE_MSG, data: response });
  } catch (error) {
    res.status(400).send({ status: 400, message: enums.ERROR_MSG });
  }
});

/*

Extracted Code

import express from "express";
import { enums } from "../contstant/enum.js";
import Tasks from "../models/taskModel.js";

const taskRoutes = express.Router();

taskRoutes.get("/", async (req, res) => {
  // find  for get  all data from mdb
  try {
    const getAllTasks = await Tasks.find();
    res
      .status(200)
      .send({ status: 200, message: enums.SUCCESS, data: getAllTasks });
  } catch (error) {
    res.status(400).send({ status: 400, message: enums.ERROR_CONNECTION });
  }
});

taskRoutes.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const response = await Tasks.create(data);
    res
      .status(200)
      .send({ status: 200, message: enums.SUCCESS_MSG, data: response });
  } catch (error) {
    res.status(400).send({ status: 400, message: enums.ERROR_CONNECTION });
  }
});

taskRoutes.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Tasks.findByIdAndDelete(id);
    res
      .status(200)
      .send({ status: 200, message: enums.DELETE_MSG, data: response });
  } catch (error) {
    res.status(400).send({ status: 400, message: enums.ERROR_CONNECTION });
  }
});
taskRoutes.put("/update/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const response = await Tasks.findByIdAndUpdate(id,data);
      res
        .status(200)
        .send({ status: 200, message: enums.UPDATE_MSG, data: response });
    } catch (error) {
      res.status(400).send({ status: 400, message: enums.ERROR_CONNECTION });
    }
  });

export default taskRoutes;

*/
