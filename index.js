import express, { application } from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import conectarBD from "./db/db.js";
import {tipos} from "./graphql/types.js"
import { resolvers } from "./graphql/resolvers.js";

dotenv.config(); 

const sever = new ApolloServer({

    typeDefs: tipos,
    resolvers:resolvers,

});

const app = express();

app.use(express.json());

app.use(cors());

app.listen({port:process.env.PORT},async () => {

    await conectarBD(); 
    await sever.start();

    sever.applyMiddleware({app});

    console.log("sevidro listin");
    
});

