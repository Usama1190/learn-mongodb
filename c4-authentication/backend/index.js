import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

dotenv.config();

// middleware
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'API is running'});
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}.`);
    
})