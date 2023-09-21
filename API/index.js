import express from "express";
import authRoutes from "./routes/auth.js";
import likesRoutes from "./routes/likes.js";
import commentsRoutes from "./routes/comments.js";
import postsRoutes from "./routes/posts.js";
import usersRoutes from "./routes/users.js";
import  cookieParser  from "cookie-parser";
import cors from "cors";

const app = express();

//middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin",true)
    res.header("Access-Control-Allow-Credentials",true)
    res.header("Access-Control-Allow-Headers",true)

    next()
})
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/likes", likesRoutes);

app.listen(8800, () => {
    console.log("running")
})