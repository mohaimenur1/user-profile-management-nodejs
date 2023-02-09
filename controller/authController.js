const userModel = require("../model/userModel");

const createUser = async (req, res) => {
  try {
    const newUser = await userModel.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        newUser,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      data: {
        error,
      },
    });
  }
};

module.exports = { createUser };
