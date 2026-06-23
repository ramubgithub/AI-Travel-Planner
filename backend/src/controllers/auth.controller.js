const bcrypt = require("bcryptjs");

const userRepository = require(
  "../repositories/user.repository"
);

const generateToken = require(
  "../utils/generateToken"
);

const {
  successResponse,
  errorResponse
} = require("../utils/apiResponse");

class AuthController {
  async register(req, res) {
    try {
      const {
        name,
        email,
        password
      } = req.body;

      const existingUser =
        await userRepository.findByEmail(
          email
        );

      if (existingUser) {
        return errorResponse(
          res,
          "User already exists",
          400
        );
      }

      const hashedPassword =
        await bcrypt.hash(
          password,
          10
        );

      const user =
        await userRepository.createUser({
          name,
          email,
          password:
            hashedPassword
        });

      const token =
        generateToken(user._id);

      return successResponse(
        res,
        "User Registered Successfully",
        {
          user: {
            id: user._id,
            name: user.name,
            email: user.email
          },
          token
        },
        201
      );
    } catch (error) {
      return errorResponse(
        res,
        error.message,
        500
      );
    }
  }

  async login(req, res) {
    try {
      const {
        email,
        password
      } = req.body;

      const user =
        await userRepository.findByEmail(
          email
        );

      if (!user) {
        return errorResponse(
          res,
          "Invalid Credentials",
          401
        );
      }

      const isMatch =
        await bcrypt.compare(
          password,
          user.password
        );

      if (!isMatch) {
        return errorResponse(
          res,
          "Invalid Credentials",
          401
        );
      }

      const token =
        generateToken(user._id);

      return successResponse(
        res,
        "Login Successful",
        {
          user: {
            id: user._id,
            name: user.name,
            email: user.email
          },
          token
        }
      );
    } catch (error) {
      return errorResponse(
        res,
        error.message,
        500
      );
    }
  }

  async getProfile(req, res) {
    try {
      const user =
        await userRepository.findById(
          req.user.id
        );

      return successResponse(
        res,
        "Profile Fetched",
        user
      );
    } catch (error) {
      return errorResponse(
        res,
        error.message,
        500
      );
    }
  }
}

module.exports =
  new AuthController();