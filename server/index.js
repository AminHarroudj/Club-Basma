import express, { request, response } from "express";
import mongoose from "mongoose";
import userModel from "./models/users.js";
import cors from "cors";
import AdminsModel from "./models/Admins.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://aminharroudj2002:7y3EKgRVvOK4suvo@cluster0.igurnmz.mongodb.net/ClubBasmaProject?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/users", async (req, res) => {
  const users = await userModel.find();
  res.json(users);
});

app.get("/admins", async (req, res) => {
  const admins = await AdminsModel.find();
  res.json(admins);
});

app.post("/createUser", async (request, response) => {
  const user = request.body;
  const newUser = new userModel(user);
  await newUser.save();
  response.json();
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const admin = await AdminsModel.findOne({ username });
  if (admin) {
    res.json({ message: "admin already existe" });
  } else {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newAdmin = new AdminsModel({
      username: username,
      password: hashedPassword,
    });
    await newAdmin.save();
    return res.json({ message: "admin created successfuly!" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const admin = await AdminsModel.findOne({ username });
  if (!admin) {
    res.json({ message: "admin not existe" });
  } else {
    const isPasswordCorrect = await bcrypt.compare(password, admin.password);
    if (!isPasswordCorrect) {
      res.json({ message: "user name or password is incorrect" });
    } else {
      const token = jwt.sign({ id: admin._id }, "amin");
      return res.json({ token: token, adminID: admin._id });
    }
  }
});

app.listen(3001, () => {
  console.log("Server Works good");
});
