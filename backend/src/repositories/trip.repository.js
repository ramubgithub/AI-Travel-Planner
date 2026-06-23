const Trip = require("../models/Trip");

class TripRepository {
  async createTrip(data) {
    return await Trip.create(data);
  }

  async getTripById(id) {
    return await Trip.findById(id);
  }

  async getTripsByUser(userId) {
    return await Trip.find({
      user: userId
    }).sort({
      createdAt: -1
    });
  }

  async updateTrip(id, data) {
    return await Trip.findByIdAndUpdate(
      id,
      data,
      {
        new: true
      }
    );
  }

  async deleteTrip(id) {
    return await Trip.findByIdAndDelete(id);
  }
}

module.exports = new TripRepository();