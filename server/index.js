import express, { request, response } from "express";
import mongoose from "mongoose";
import userModel from "./models/users.js";
import cors from "cors";

const app = express();
app.use(express.json())
app.use(cors());

mongoose.connect(
  "mongodb+srv://aminharroudj2002:7y3EKgRVvOK4suvo@cluster0.igurnmz.mongodb.net/ClubBasmaProject?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/users", async (request, response) => {
  const users = await userModel.find();
  response.json(users);
});

app.post("/createUser", async (request, response) => {
  const user = request.body
  const newUser = new userModel(user)
  await newUser.save()
  response.json()
})

app.listen(3001, () => {
  console.log("Server Works good");
});
