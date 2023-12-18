const express = require('express');

const app = express();

const cors = require('cors');
const corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:3000/", "https://taylormade.netlify.app"],
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (request, response) => {
    response.json({
        message:"Hello World!"
    });
});

const BookingRouter = require('./controllers/BookingController');
app.use('/bookings', BookingRouter);

const authRouter = require('./controllers/AuthController');
app.use("/users", authRouter);

module.exports = {
    app
}