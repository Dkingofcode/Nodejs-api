import mongoose from "mongoose";
import config from "config";
import logger from "../utils/logger"


async function connect(){
  const dbUri = config.get<string>("dbUri");  
 try{
   await mongoose.connect(dbUri)
   logger.info("Database is connected"); 
} catch (error) {
    logger.error("Could not connect to DB");
    process.exit(1); 
 }
  //  {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
}


export default connect;