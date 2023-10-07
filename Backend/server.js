import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import morgan from 'morgan';
import serviceRoutes from './routes/ServiceRoutes.js';
import cors from 'cors';

dotenv.config();

connectDB();
const app = express();
app.use(morgan('dev'));
app.use(cors({
    origin: '*'
    
}));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello From the Mall-Hub!');
});

app.use('/api/services', serviceRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});