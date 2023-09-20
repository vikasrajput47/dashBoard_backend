import ErrorHandler from "../middlewares/error.js";
import { team } from "../models/teams.js";


export const newTeam = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            email,
            gender,
            avatar,
            domain,
            available,
        } = req.body;
          let user = await team.findOne({ email });
          if (user) return next(new ErrorHandler("member Already Exist", 400));
        await team.create({
            first_name,
            last_name,
            email,
            gender,
            avatar,
            domain,
            available,
          user: req.user,
            
        });

        res.status(201).json({
            success: true,
            message: "member added",
        });
    } catch (error) {
        res.json({
          success: false,
          message: "member already in someones team",
        });
    }
};

export const getTeam = async (req, res,next) => {
  try {
    const userid = req.user._id;
    const members = await team.find({ user: userid });
    res.status(200).json({
      success: true,
      members,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTeam = async (req, res, next) => {
  try {
    const members = await team.findById(req.params.id);

    if (!members) return res.status(404).json({success:false,message:'team not exist'});
    await team.deleteOne();

    res.status(200).json({
      message: "member Deleted!",
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

