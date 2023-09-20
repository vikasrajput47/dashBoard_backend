import mongoose from "mongoose";
const schema = new mongoose.Schema({
   id: {
      type: String,
      required:true,
   },
   first_name:{
    type:String,
    required:true,
   },
   last_name:{
    type:String,
    required:true,
   },
   email:{
    type:String,
    required:true,
    unique:true,
   },
   gender:{
    type:String,
    required:true,
   },
   avatar:{
    type:String,
    required:true,
   },
   domain:{
    type:String,
    required:true,
   },
   available:{
    type:Boolean,
    required:true,
   }
}) 

export const empInfo=mongoose.model('empInfo',schema);