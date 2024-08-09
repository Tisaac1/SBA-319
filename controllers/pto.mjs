import express from 'express';
const router = express.Router();
import db from '../db/conn.mjs';
import ptoR from '../models/pto.mjs';
router.get('/', async (req, res) => {
    try {
        const foundptoR = await ptoR.find({});
        res.status(200).render('ptoR/index', { ptoR: foundptoR})
      
    } catch (e) {
        res.status(400).send(e);
    }
})


router.get('/new', (req, res) => {
    res.render('ptoR/new');

})


router.delete('/:id', async(req, res) => {
    try {
        const deletedptoR = await ptoR.findByIdAndDelete(req.params.id);
        console.log(deletedptoR);
        res.status(200).redirect('/ptoR');
   
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
        const updatedptoR = await ptoR.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
        console.log(updatedptoR);
        res.redirect(`/ptoR/${req.params.id}`);
     
    } catch (e) {
        res.status(400).send(e);
    }
})


router.post('/ptoR', async(req, res) => {
   
    if (req.body.statusofApproval === 'on') {
        req.body.statusofApproval = true;
    } else {
        req.body.statusofApproval = false;
    }
    console.log(req.body);

    try {
        const createdptoR = await ptoR.create(req.body);
       
        res.status(200).redirect('/ptoR');
  
    } catch(e) {
        res.status(400).send(e);
    }
})


router.get("/:id/edit", async(req, res) => {
    try {
        const foundptoR = await ptoR.findById(req.params.id);
    
        res.status(200).render('ptoR/edit', {ptoR: foundptoR});
   
    } catch(e) {
        res.status(400).send(e);
    }
})


router.get('/:id', async (req, res) => {
    try {
        const foundptoR = await ptoR.findById(req.params.id);

        res.render('ptoR/show', {ptoR:foundptoR});
            
    } catch (e) {
        res.status(400).send('err');
    }
})

export default router;