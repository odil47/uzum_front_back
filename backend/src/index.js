// importlar

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

connectDB();

// Funksiyalar
const app = express();
app.use(express.json());    
app.use(cors());

const authRoutes = require('./routes/auth.routes');
const korzinkaRoutes = require('./routes/korzinka.routes');
const getAll_create = require("./routes/get_create.routes")
const likeRoutes = require("./routes/like.routes")



app.use(authRoutes);
app.use(korzinkaRoutes);
app.use(getAll_create)
app.use(likeRoutes)


app.listen(process.env.PORT, () => {
    console.log(`server run http://localhost:${process.env.PORT}`);
})
