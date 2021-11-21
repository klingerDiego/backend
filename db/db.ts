import { connect } from "mongoose"
// const {connect} = require("mongoose")

const conectarBD = async () => {

    return await connect("mongodb+srv://diegoKlinger:<password>@misproyectos.k0txb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(() => {
        console.log("conexion exitosa")
    }).catch((e) => {
        console.log("error al conectar a la db", e)
    })
};

export default conectarBD;

