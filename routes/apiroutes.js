import express from "express";
import * as factorio from "../controllers/factoriocontrollers.js";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  let { id } = req.params;
  let data;

  if (id) {
    data = await factorio.findOne(id);
  } else {
    data = await factorio.findAll();
  }

  res.json(data);
});

router.post("/", async (req, res, next) => {
  let factorioData = req.body;
  let data = await factorio.AddOne(factorioData, req.method);
  res.json(data);
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  let updatedData = req.body;
  const data = await factorio.update(updatedData, id);
  res.json(data);

});

router.delete("/:id", async (req, res, next) => {
  let { id } = req.params;
  let data = await factorio.remove(id);
  res.json(data);
});

export default router;