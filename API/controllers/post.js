import { db } from "../connect.js"
import  Jwt  from "jsonwebtoken"

export const getPosts = (req, res) => {
    const token = req.cookies.accessToken;

    if (!token) return res.status(401).json("Not Logged In");

    Jwt.verify(token, "secret-key", (err, userInfo) => {
        if(err) return res.status(403).json("Invalid Token")
        
        const q = `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)
        JOIN relationships AS r ON (p.userId = r.followerUserId AND r.followerUserId = ?)`
        
        db.query(q, [userInfo.id], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(data);
        })
    })
}