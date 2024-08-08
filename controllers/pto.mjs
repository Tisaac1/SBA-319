import express from 'express';
const router = express.Router();
import db from '../db/conn.mjs';
import Pto from '../models/pto.mjs';
router.get('/', async (req, res) => {
    try {
        const foundpto = await Pto.find({});
        res.status(200).render('ptoR/index', { Pto: foundpto})
        // res.status(200).send(foundptos);
        // ***** if this were a true api, this would respond with json *****
        // res.status(200).json(foundptos);
    } catch (e) {
        res.status(400).send(e);
    }
})

// N - New      GET         CREATE - (a) this is a view that allows user input
router.get('/new', (req, res) => {
    res.render('ptoR/new');
   // ***** if this were a true api, this would not be here *****
   // the user/client would just use the create route (router.post) and 
   // they would be responsible for updating the body correctly
})

// D - Delete   DELETE      DELETE
router.delete('/:id', async(req, res) => {
    try {
        const deletedpto = await pto.findByIdAndDelete(req.params.id);
        console.log(deletedpto);
        res.status(200).redirect('/ptoR');
        // ***** if this were a true api, this would respond with json *****
        // res.status(200).json(deletedpto);
    } catch (e) {
        res.status(400).send(e);
    }
})

// U - Update   PUT/PATCH   UPDATE - (b) this updates our database
router.put('/:id', async (req, res) => {
        // I need to handle the checkbox and make sure that value is a boolean
        if (req.body.readyToEat === 'on') {
            req.body.readyToEat = true;
        } else {
            req.body.readyToEat = false;
        }
        // console.log(req.body);

    try {
        const updatedPto = await pto.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
        console.log(updatedPto);
        res.redirect(`/ptoR/${req.params.id}`);
        // ***** if this were a true api, this would respond with json *****
        // res.status(200).json(updatedpto);
    } catch (e) {
        res.status(400).send(e);
    }
})

// C - Create   POST        CREATE - (a) this adds to our database
// I am starting with my POST route so that I can see the things in my database
router.post('/', async(req, res) => {
    // I need to handle the checkbox and make sure that value is a boolean
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    console.log(req.body);

    try {
        const createdPto = await Pto.create(req.body);
        // this was me checking before I had my views
        // res.send(createdpto);
        res.status(200).redirect('/ptoR');
        // ***** if this were a true api, this would respond with json *****
        // res.status(200).json(createdpto);
    } catch(e) {
        res.status(400).send(e);
    }
})

// E - Edit     GET         UPDATE - (b) but this allows for the user input
router.get("/:id/edit", async(req, res) => {
    try {
        const foundPto = await Pto.findById(req.params.id);
        //res.send(foundpto);
        res.status(200).render('ptoR/edit', {pto: foundPto});
    // ***** if this were a true api, this would not be here *****
   // the user/client would just use the update route (router.put) and 
   // they would be responsible for updating the body correctly
    } catch(e) {
        res.status(400).send(e);
    }
})

// S - Show     GET         READ - display a specific element
router.get('/:id', async (req, res) => {
    try {
        const foundPto = await pto.findById(req.params.id);
//        res.send(`this is the show page for the pto with id: ${req.params.id}`);
        res.render('ptoR/show', {pto:foundPto});
            // ***** if this were a true api, this would not be here *****
            // res.status(200).json(foundpto);
    } catch (e) {
        res.status(400).send('err');
    }
})

export default router;