import { empInfo } from "../models/empInfo.js";


export const getData=async (req, res) => {
  try {
    const { email } = req.body;
    const data = await empInfo.findOne({ email });
    console.log(data);
    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.json({
      message: "some error occure",
    });
  }
}

export const createData = async (req, res) => {
  try {
    const {
      id,
      first_name,
      last_name,
      email,
      gender,
      avatar,
      domain,
      available,
    } = req.body;
    let user = await empInfo.create({
      id,
      first_name,
      last_name,
      email,
      gender,
      avatar,
      domain,
      available,
    });
    res.json({
      success: true,
      message: "Done in time",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
};



export const getDataById = async (req, res) => {
  try {
    let user = await empInfo.findById(req.params.id);
    res.json({
      success: true,
      user,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
};


export const getAllData = async (req, res) => {
  try {
    let userData = await empInfo.find();
    res.status(200).json({
      success: true,
      userData,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};