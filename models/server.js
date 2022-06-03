const express = require("express");
const cors = require("cors");
const {dbConnection} = require("../database/config");

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.lovePath = "/api/love"

        this.dataBaseConection();
        this.middlewares();
        this.routes();

    }

    async dataBaseConection(){
        dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.lovePath, require("../routes/love.routes"));
    }

    listener() {
        this.app.listen(this.port || 8087, () => {
          console.log("Servidor corriendo en el puerto", this.port);
        });
      }
}

module.exports = Server;