import { db } from '../connect.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = (req, res) => {
    //user exists?
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json({ error: err.message })
        if (data.length) return res.status(400).json({ error: "user already exists" });
        //create user
        //hash password
    
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users (`username`, `email`, `password`, `name`) VALUES (?)"

        const values = [req.body.username, req.body.email, hashedPassword, req.body.name]

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json({ error: err.message })
            return res.status(201).json({ message: "user created" })
        });
    })

    


}
export const login = (req, res) => {
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json({ error: err.message })
        if (!data.length) return res.status(400).json({ error: "user does not exist" });
        //check password
        const validPassword = bcrypt.compareSync(req.body.password, data[0].password);
        if (!validPassword) return res.status(400).json({ error: "wrong password" });
        // create token
        const token = jwt.sign({ id: data[0].id }, "secret-key");
        // res.header('auth-token', token).json({ token: token });

        const { password, ...others } = data[0];

        res.cookie("accessToken", token, {
            httpOnly: true,
            sameSite: 'None',
        }).status(200).json(others)
    })
}

export const logout = (req, res) => {
    res.clearCookie("accessToken", {
        secure: false,
        sameSite: "none",
    }).status(200).json({ message: "user logged out" })
}