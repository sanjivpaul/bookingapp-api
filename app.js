// const express = require("express");
// we are not using this style so we use type: module in json file
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const PORT = 8800;

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!");
});

mongoose.connection.on("Connected", ()=>{
    console.log("mongoDB connected!")
});

app.listen(PORT, (req, res) => {
    try {
        connect();//call mogodb function
        console.log("connected to server on port: ", PORT)
    } catch (error) {
        console.log(error);
    }
})