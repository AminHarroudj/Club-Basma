import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
});

const userModel = mongoose.model("users", UserSchema);

export default userModel;
