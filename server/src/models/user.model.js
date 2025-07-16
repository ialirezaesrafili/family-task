import { model, Schema, Types } from "mongoose";
const UserSchema = new Schema({
    firstname: {
        type: String, 
        required: false,
        lowercase: true,
        trim: true,
    }, 
    lastname: {
        type: String,
        required: false,
        lowercase: true,
        trim: true
    }, 
    email: {
        type: String, 
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: false,

    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
    phone: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        required: false,
        enum: ['user', 'admin'],
        default: 'user',
    },
     frinedsList: {
         type: [String],
         required: false,
         default: []
    },
    shopingList: {
        type: [Types.ObjectId],
        required: false,
        ref: "Shoping",
        default: []
    },
    membership: {
        type: Types.ObjectId,
        ref: "MemberShip",
    },
    isConfirm: {
        type: Boolean,
        required: false,
        default: false
    },
    isLoggin: {
        type: Boolean,
        required: false,
        default: false
    },
    token: {
        type: Types.ObjectId,
        ref: "Token",
        required: false,
        default: ""
    }
}, {
    timestamps: true
});


export const userModel = model('User', UserSchema);