import express from 'express';
const router = express.Router();
import users from '../models/users.mjs';
import db from '../db/conn.mjs';

// const users = [
//     {id: 1, name: "Tiffany Isaac", hireYear: 2020, title: "QA Engineer" },
//     {id: 2, name: "Tina Snow", hireYear: 2017, title: "Director of sound" },
//     {id: 3, name: "Wolverine Jack", hireYear: 2002, title: "Security" },
//     {id: 4, name: "Dead Pool", hireYear: 2011, title: "Communication specialist" },
//     {id: 5, name: "Chris Evans", hireYear: 2024, title: "Supervisor" },
// ];

router.get('/', async (req, res) => {
    try {
        const foundusers = await users.find({});
        res.status(200).render('users/index', { users: foundusers})
      
    } catch (e) {
        res.status(400).send(e);
    }
})


router.get('/new', (req, res) => {
    res.render('users/new');

})


router.delete('/:id', async(req, res) => {
    try {
        const deletedusers = await users.findByIdAndDelete(req.params.id);
        console.log(deletedusers);
        res.status(200).redirect('/users');
   
    } catch (e) {
        res.status(400).send(e);
    }
})

router.put('/:id', async (req, res) => {
    
        if (req.body.statusofApproval === 'on') {
            req.body.statusofApproval = true;
        } else {
            req.body.statusofApproval = false;
        }
        // console.log(req.body);

    try {
        const updatedusers = await users.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
        console.log(updatedusers);
        res.redirect(`/users/${req.params.id}`);
     
    } catch (e) {
        res.status(400).send(e);
    }
})


router.post('/users', async(req, res) => {
   
    if (req.body.statusofApproval === 'on') {
        req.body.statusofApproval = true;
    } else {
        req.body.statusofApproval = false;
    }
    console.log(req.body);

    try {
        const createdusers = await users.create(req.body);
       
        res.status(200).redirect('/users');
  
    } catch(e) {
        res.status(400).send(e);
    }
})


router.get("/:id/edit", async(req, res) => {
    try {
        const foundusers = await users.findById(req.params.id);
    
        res.status(200).render('users/edit', {users: foundusers});
   
    } catch(e) {
        res.status(400).send(e);
    }
})


router.get('/:id', async (req, res) => {
    try {
        const foundusers = await users.findById(req.params.id);

        res.render('users/show', {users:foundusers});
            
    } catch (e) {
        res.status(400).send('err');
    }
})

export default router;