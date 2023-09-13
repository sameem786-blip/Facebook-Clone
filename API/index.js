import Express from "express";
import authRoutes from "./routes/auth.js";
import likesRoutes from "./routes/likes.js";
import commentsRoutes from "./routes/comments.js";
import postsRoutes from "./routes/posts.js";
import usersRoutes from "./routes/users.js";

const app = Express();

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/likes", likesRoutes);

app.listen(8800, () => {
    console.log("running")
})