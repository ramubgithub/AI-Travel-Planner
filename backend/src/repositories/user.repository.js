const User = require("../models/User");

class UserRepository {
  async createUser(userData) {
    return await User.create(userData);
  }

  async findByEmail(email) {
    return await User.findOne({ email });
  }

  async findById(id) {
    return await User.findById(id).select("-password");
  }

  async updateUser(id, data) {
    return await User.findByIdAndUpdate(
      id,
      data,
      {
        new: true
      }
    ).select("-password");
  }

  async deleteUser(id) {
    return await User.findByIdAndDelete(id);
  }
}

module.exports = new UserRepository();