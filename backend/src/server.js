const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();
const cookieParser = require('cookie-parser');

const connectDB = require("./configs/db");

const router = require("./routes");


// Import các module cần thiết
const http = require('http');

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "http://103.167.89.246",
  "http://103.167.89.246:9999",
  "http://192.168.102.28:3000"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "token"]
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "2000mb" }));
app.use(express.urlencoded({ limit: "2000mb", extended: true }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());


router(app);

app.use(async (err, req, res, next) => {
  res.status = err.status || 500;
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

connectDB();
const PORT = process.env.PORT || 9998;

// Khởi tạo HTTP server
const server = http.createServer(app);


// Dùng server.listen thay vì app.listen
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));