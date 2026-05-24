import mongoose from "mongoose";

const URLSchema = mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    longUrl: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export const URLs = mongoose.model("urls", URLSchema);
