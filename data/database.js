import  mongoose  from "mongoose";
export const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:'companyDashboard'
    }).then((c)=>console.log(`database is connect with ${c.connection.host}`))
    .catch((e)=>console.log(e))
}