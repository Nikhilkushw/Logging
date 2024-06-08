const client = require("../module/client");
const Logger = require('../utils/logger')


const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await client.findAll({
      where: { id },
      });
    Logger.info('Successfully fetched data')
    res.json({
      status: true,
      message: "Successfully fetched",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Something went to wrong",
      error,
    });
    Logger.error('Data is not fetched')
  }
};

const createUser = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirm_password: req.body.confirm_password,
    };
    client.create(data);
    res.json({
      status: true,
      message: "Successfully create data",
      data: data,
    });
    Logger.info('Successfully Send Data')
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Something went to wrong",
      error,
    });
    Logger.error('Data is not create')
  }
};

const updateUser = async (req, res) => {
  try {
    const found = await client.findByPk(req.params.id);
    if (found) {
      let updateData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirm_password: req.body.confirm_password,
      };
      await found.update(updateData);
      res.json({
        status: true,
        message: "Successfully UPDATE data",
        data: found,
      });
      Logger.info("Successfully Data Updated")
    } else {
      res.status(500).json({
        status: false,
        message: "Sorry data is not UPDATE",
        error,
      });
      Logger.error("")
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Something went to wrong",
      error,
    });
    Logger.error('Data is not Update')
  }
};

const deletUser = async (req, res) => {
  try {
    const found = await client.findByPk(req.params.id);
    if (found) {
      await found.destroy();
      res.json({
        status: true,
        message: "Successfully DELETE data",
        data: found,
      });
      Logger.info("Successfully Data Deleted")
    } else {
      res.status(500).json({
        status: false,
        message: "Sorry data is not DELETE",
        error,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Something went to wrong",
      error,
    });
    Logger.error('Data is not Delete')
  }
};

module.exports = {
  getUserById,
  createUser,
  updateUser,
  deletUser,
};
