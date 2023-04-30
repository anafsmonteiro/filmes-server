import mongoose from "mongoose";

mongoose.connect("mongodb+srv://anaflaviasmonteiro:1234@alura.kvxt2fz.mongodb.net/alura-node")

let db = mongoose.connection;

export default db;