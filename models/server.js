const express = require('express')
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.indexPath = '/api/index'

        //Application Route
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        //Body parsing and reading
        this.app.use(express.json({ type: ['application/json'] }));
        this.app.use(express.urlencoded({ extended: true }));
        //Public directory
        this.app.use(express.static('public'));
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