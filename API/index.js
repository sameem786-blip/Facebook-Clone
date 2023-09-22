import express from "express";
import authRoutes from "./routes/auth.js";
import likesRoutes from "./routes/likes.js";
import commentsRoutes from "./routes/comments.js";
import postsRoutes from "./routes/posts.js";
import usersRoutes from "./routes/users.js";
import  cookieParser  from "cookie-parser";
import cors from "cors";
import multer from "multer";

const app = express();


//middlewares
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","http://localhost:3000")
    res.header("Access-Control-Allow-Credentials",true)
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")

    next()
})
app.use(express.json());

app.post("/api/upload", upload.single("file"), (req, res) => {
    const file = req.file;
    res.status(200).json(file.filename);
})
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/likes", likesRoutes);

app.listen(8800, () => {
    console.log("running")
})