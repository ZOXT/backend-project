import dotenv from "dotenv"
import connectDB from './db/index.js';



dotenv.config({
    path : './env'
})


connectDB()





// v Could have used this approach too but we are gonna use a better one 
// const app = express()(async () => {
//   try {
//     mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERR", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening at port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("Error", error);
//   }
// })();
