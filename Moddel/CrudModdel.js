import mongoose from "mongoose";

const CreateSchema = new mongoose.Schema(
    {
        name: {
        type: String,
        required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
    }
);

export const CreateModel = mongoose.model("objects",CreateSchema);