import moment from "moment/moment.js";
import { db } from "../connect.js"
import  Jwt  from "jsonwebtoken"

export const getPosts = (req, res) => {
    const token = req.cookies.accessToken;

    if (!token) return res.status(401).json("Not Logged In");

    Jwt.verify(token, "secret-key", (err, userInfo) => {
        if(err) return res.status(403).json("Invalid Token")
        
        const q = `SELECT p.*, u.id AS userId, u.name, u.profilePic FROM posts AS p JOIN users AS u ON u.id = p.userId LEFT JOIN (SELECT followedUserId FROM relationships WHERE followerUserId = ?) AS r ON p.userId = r.followedUserId WHERE r.followedUserId IS NOT NULL OR p.userId = ?;`;
        
        db.query(q, [userInfo.id, userInfo.id], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(data);
        })
    })
}
export const addPosts = (req, res) => {
    const token = req.cookies.accessToken;

    if (!token) return res.status(401).json("Not Logged In");

    Jwt.verify(token, "secret-key", (err, userInfo) => {
        if(err) return res.status(403).json("Invalid Token")
        
        const q = "INSERT INTO posts (`desc`,`img`,`userId`,`createdAt`) VALUES (?);";
        const values = [
            req.body.desc,
            req.body.img,
            userInfo.id,
            moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        ]
        
        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("posted");
        })
    })
}