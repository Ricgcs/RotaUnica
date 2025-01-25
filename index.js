import { cadastro, vizualizar } from "./cods.js";
import express, { response } from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import multer from "multer";


const app = express();
const host = "127.0.0.1";
const porta = 3000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());    


app.post("/cadastro", async(req, res)=>{

    const recebido = req.body;
    const enviavel = recebido.tt;
    const valor = ["tb1", "teste86", 18];
    console.log(`recebido: `, enviavel);
    cadastro(enviavel);
    

})

app.post("/ver",async(req,res)=>{
console.log("chegou fdp")

const ver = req.body;
const vizualizavel = ver.tt;
console.log(vizualizavel)
const vamo = await vizualizar(vizualizavel);
console.log("servidor", vamo)
})

app.listen(porta, host, () => {
    console.log("Servidor funcionando");
  });
  