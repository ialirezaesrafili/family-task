// import packages
import autoBind from "auto-bind";

// import modules
import authService from "../services/auth.service.js";
import { httpStatus } from "../utils/httpCode.utils.js";
export class AuthController{
    #authService;
    constructor() { 
        autoBind(this);
        this.#authService = authService;
    }
    

    async register(req, res, next) {
        try { 
            const { email, password, other } = req.body;
            if (!email || !password) {
                return res.status(httpStatus.noContent.code).json({
                    message: httpStatus.noContent.message
                })
            }
            const userData = {
                email: email,
                password: password,
                ...other
            }

            const user = await this.#authService.registerUser(userData);
            if (user?.error) {
                return res.status(httpStatus.notImplemente.code).json({
                    message: httpStatus.notImplemente.message,
                })
            }

            return res.status(httpStatus.created.code).json({
                message: httpStatus.created.message,
                data: user?.data
            })
        }
        catch (error) {
            console.error(`[Auth Controller] error occurred which containes this error message: ${error.message}`);
            next(error.message);
        }
    }

} 


const authController = new AuthController();

export default authController;