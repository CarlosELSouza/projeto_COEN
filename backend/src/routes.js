import { Router } from "express";
import Items from "./app/models/Items";

const routes = new Router();

routes.post("/", async (req, res) => {
  const {
    name,
    quantity,
    use_time,
    hours_or_minutes,
    potency,
    total_consume,
    total_value,
  } = req.body;

  const item = await Items.create({
    name,
    quantity,
    use_time,
    hours_or_minutes,
    potency,
    total_consume,
    total_value,
  });

  return res.json(item);
});

routes.get("/", async (req, res) => {
  const items = await Items.findAll();

  return res.json(items);
});

export default routes;
