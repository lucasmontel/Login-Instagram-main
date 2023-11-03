const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const admin = require("./routes/routes");
const bodyParser = require("body-parser");
// Nos conectando
mongoose
  .connect("mongodb://localhost/logininstagram", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado com Sucesso!");
  })
  .catch((err) => { 
    console.log("Erro ao se conectar: " + err);
  });
mongoose.Promise = global.Promise;


//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Falamos que todas as rotas em admin pertencem a "/admin"(subrotas)
app.use("/admin", admin);

//Estamos indicando onde estão os nossos arquivos css
app.use(express.static(path.join(__dirname, "/public/css")));
// E aqui as imagens
app.use(express.static(path.join(__dirname, "/img")));
//Definindo diretório de arquivos a serem renderizados:

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const porta = 4000;
app.listen(porta, () => {
  console.log("Success!");
});
