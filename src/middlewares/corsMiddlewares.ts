import cors from 'cors';

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccesStatus:200
}

module.exports = cors(corsOptions);