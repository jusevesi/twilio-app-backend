const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.indexPath = '/api'

        //Database Connection
        this.connectDB();
        //Middlewares
        this.middlewares();
        //Application Route
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        //Body parsing and reading
        this.app.use(express.json({ type: ['application/json'] }));
        this.app.use(express.urlencoded({ extended: true }));
    }

    routes() {
        this.app.use(this.indexPath, require('../routes/index'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port:', this.port);
        });
    }
}

module.exports = Server;