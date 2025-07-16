import mongoose from "mongoose";
import chalk from "chalk";
export const databaseConnection = async (mongoLink) => {
    try {
        const mongodb = await mongoose.connect(mongoLink, {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        });
        console.log(chalk.green("[MONGODB] server is connected!"));
     }
    catch (error) {
        console.log(chalk.redBright(error.message));
        process.exit(1);
    }
}