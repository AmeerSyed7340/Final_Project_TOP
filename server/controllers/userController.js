const User = require('../models/user');
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

exports.createUser = asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;

    //create hashed password
    bcrypt.hash(password, 10, async (err, hashedPassword) => {
        try {
            const newUser = new User({
                username,
                password: hashedPassword
            })

            //save the user to db
            await newUser.save();

            //return the new user
            res.status(201).json(newUser)
        }
        catch (err) {
            return next(err);
        }
    })
})

exports.findUser = asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;

    //first try to find the User with the same username
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Login failed" });
        }
        //verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Login failed' });
        }
        //Generate JWT
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })

        //return jwt
        res.json({ token });
    } catch (error) {
        return next(error);
    }
})