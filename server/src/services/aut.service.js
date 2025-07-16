import chalk from "chalk";
import bcrypt from "bcryptjs";
import { userModel } from "../models/user.model.js";

class AuthService {
    #userModel;
    
    constructor() {
        this.#userModel = userModel;
    }

    async registerUser(userData) {
        try {
            // Check if user exists
            const existingUser = await this.checkingUser(userData.email);
            if (existingUser) {
                return {
                    data: null,
                    error: "Email already registered"
                };
            }

            // Hash password and create user
            const hashedPassword = await this.hashingPassword(userData.password);
            const newUser = await this.#userModel.create({
                ...userData,
                password: hashedPassword
            });

            return {
                data: newUser,
                error: null
            };
        } 
        catch (error) {
            console.error(chalk.bgRed(`[Auth] Registration error: ${error.message}`));
            throw new Error(`Registration failed: ${error.message}`);
        }
    }

    /* --- Private Methods --- */
    async hashingPassword(password) {
        return bcrypt.hash(password, 10);
    }

    async comparingPassword(password, hashed) {
        return bcrypt.compare(password, hashed);
    }

    async checkingUser(email) {
        try {
            return await this.#userModel.findOne({ email });
        } 
        catch (error) {
            console.error(chalk.bgRed(`[Auth] DB lookup error: ${error.message}`));
            throw new Error(`User check failed: ${error.message}`);
        }
    }
}


const authService = new AuthService();

export default authService;