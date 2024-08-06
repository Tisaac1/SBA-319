import express from 'express';
const router = express.Router();
import user from '../models/users.mjs';
import db from '../db/conn.mjs';
import Users from '../models/users.mjs';
// const Users = [
//     {id: 1, name: "Tiffany Isaac", hireYear: 2020, title: "QA Engineer" },
//     {id: 2, name: "Tina Snow", hireYear: 2017, title: "Director of sound" },
//     {id: 3, name: "Wolverine Jack", hireYear: 2002, title: "Security" },
//     {id: 4, name: "Dead Pool", hireYear: 2011, title: "Communication specialist" },
//     {id: 5, name: "Chris Evans", hireYear: 2024, title: "Supervisor" },
// ];

// Get all Users --- Create GET routes
router.get('/', async (req, res) => {
    res.json(Users);
});

// GET a user by ID
router.get('/:id', (req, res) => {
    const user = Users.find(emp => emp.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('user not found.');
    res.json(user);
});

// Create POST routes
router.post('/', async (req, res) => {
    try {
        const newUser = {
            id: req.body.id,
            name: req.body.name,
            hireYear: req.body.hireYear,
            title: req.body.title
        };

        const result = await db.collection('Users').insertOne(newUser);
        res.send("New User has been added.");
    } catch (err) {
        console.error('Error adding User:', err);
        res.status(500).send('Error adding User');
    }
});

//--- Create PATCH or PUT routes for data
router.put('/:id', async (req, res) => {
    try {
        const UserId = parseInt(req.params.id);
        const updatedUser = {
            $set: {
                id: req.body.id,
                name: req.body.name,
                hireYear: req.body.hireYear,
                title: req.body.title
            }
        };
        const result = await db.collection('Users').updateOne({ id: UserId }, updatedUser);
        res.send("User data updated.");
    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).send('Error updating user');
    }
});

//--- Create DELETE routes for data
router.delete('/:id', async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        const result = await db.collection('Users').deleteOne({ id: userId });
        res.send('user deleted');
    } catch (err) {
        console.error('Error deleting user:', err);
        res.status(500).send('Error deleting user');
    }
});
""

export default router; // Export the router instance