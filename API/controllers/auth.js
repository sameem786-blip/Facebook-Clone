import { db } from '../connect.js';
import bcrypt from 'bcryptjs';

export const register = (req, res) => {
    //user exists?
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json({ error: err.message })
        if (data.length) return res.status(400).json({ error: "user already exists" });
        //create user
        //hash password
    
        const salt = brcypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users (`username`, `email`, `password`, `name`) VALUES (?)"

        const values = [[req.body.username, req.body.email, hashedPassword, req.body.name]]

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json({ error: err.message })
            return res.status(201).json({ message: "user created" })
        });
    })

    


}
export const login = (req, res) => {
    
}

export const logout = (req, res) => {
    
}