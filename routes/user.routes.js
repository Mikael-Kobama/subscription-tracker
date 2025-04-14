import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("GET all users");
});
userRouter.get("/:id", (req, res) => {
  res.send("GET all details");
});
userRouter.post("/", (req, res) => {
  res.send("CREATE all users");
});
userRouter.put("/:id", (req, res) => {
  res.send("UPDATE all users");
});
userRouter.delete("/:idd", (req, res) => {
  res.send("DELETE all users");
});
