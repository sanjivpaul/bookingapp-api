import express from "express";

const router = express.Router();

router.get("/", (req, res)=>{
    res.status(200).send("Hello, this is auth api")
})

router.get("/register", (req, res)=>{
    res.status(200).send("this is registe of auth")
})

export default router;