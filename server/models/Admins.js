import mongoose from "mongoose";

const AdminsSchema = mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

const AdminsModel = mongoose.model("admins", AdminsSchema);

export default AdminsModel;
