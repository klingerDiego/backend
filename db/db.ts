import { connect } from "mongoose";
// const {connect} = require("mongoose");

const conectarBD = async () => {

    return await connect("mongodb+srv://diegoKlinger:geri0916@misproyectos.k0txb.mongodb.net/GestionProyectos?retryWrites=true&w=majority")
    .then(() => {
        console.log("conexion exitosa")
    }).catch((e) => {
        console.log("error al conectar a la db", e)
    })
};

export default conectarBD;

//aca me estoy conectando a la base de datos, es decir, mongodb

