import mongoose from "mongoose";

// const {connect} = require("mongoose");

const conectarBD = async () => {

    return await mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("conexion exitosa")
    }).catch((e) => {
        console.log("error al conectar a la db", e)
    })
};

export default conectarBD;

//aca me estoy conectando a la base de datos, es decir, mongodb

