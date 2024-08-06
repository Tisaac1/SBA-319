import express from 'express';
const router = express.Router();
import Pto from '../models/pto.mjs';
import db from '../db/conn.mjs';
import PtoRequest from '../models/pto.mjs';

router.post('/', async(req, res) => {
    // I need to handle the checkbox and make sure that value is a boolean
    if (req.body.approvedpto === 'on') {
        req.body.approvedpto = true;
    } else {
        req.body.approvedpto = false;
    }
    console.log(req.body);

    try {
        const createdPto = await Pto.create(req.body);
        // this was me checking before I had my views
        // res.send(createdPto);
        res.status(200).redirect('/Ptos');
        // ***** if this were a true api, this would respond with json *****
        // res.status(200).json(createdPto);
    } catch(e) {
        res.status(400).send(e);
    }
})

// const PtoRequest = [
//     { id: 1, date: new Date("2024-09-01"), PtoRequest: "Personal-Day", hoursADay: 8 },
//     { id: 2, date: new Date("2024-10-25"), PtoRequest: "Vacation", hoursADay: 8 },
//     { id: 3, date: new Date("2024-12-17"), PtoRequest: "Family birthday", hoursADay: 8 },//my kids bday
//     { id: 4, date: new Date("2024-11-29"), PtoRequest: "Birthday", hoursADay: 8 }
// ];

// GET all time off requests
router.get('/', (req, res) => {
    res.json(PtoRequest);
});

router.get("/:id/edit", async(req, res) => {
    try {
        const request = await pto.findById(req.params.id);
        //res.send(request);
        res.status(200).render('pto/Edit', {pto: request});
    // ***** if this were a true api, this would not be here *****
   // the user/client would just use the update route (router.put) and 
   // they would be responsible for updating the body correctly
    } catch(e) {
        res.status(400).send(e);
    }
})


// GET a single time off request by ID
router.get('/:id', (req, res) => {
    const requestId = parseInt(req.params.id);
    const request = PtoRequest.find(req => req.id === requestId);
    if (!request) return res.status(404).send('Time off request record not found.');
    res.json(request);
});

//UPDATE REQUEST

router.put('/:id', async (req, res) => {
    // I need to handle the checkbox and make sure that value is a boolean
    if (req.body.requestedPto === 'on') {
        req.body.requestedPto = true;
    } else {
        req.body.requestedPto = false;
    }
    // console.log(req.body);

try {
    const updatedPto = await Pto.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
    );
    console.log(updatedPto);
    res.redirect(`/pto/${req.params.id}`);
    // ***** if this were a true api, this would respond with json *****
    // res.status(200).json(updatedPtos);
} catch (e) {
    res.status(400).send(e);
}
})

// POST a new time off request
router.post('/', (req, res) => {

    const newRequest = {
        id: pto.length + 1,
        date: req.body.date,
        typePtoRequest: req.body.typePtoRequest,
        hoursADay: req.body.hoursADay
    };
    timePtoRequest.push(newRequest);
    res.send('Pto request record added.');
});


// PUT/PATCH to update an existing time off request

router.put('/:id', (req, res) => {

    const requestId = parseInt(req.params.id);
    const requestIndex = PtoRequest.findIndex(req => req.id === requestId);
    if (requestIndex === -1) return res.status(404).send('Time off request not found.');

    PtoRequest[requestIndex] = {
        ...PtoRequest[requestIndex],
        date: req.body.date || PtoRequest[requestIndex].date,
        PtoRequest: req.body.PtoRequest || PtoRequest[requestIndex].PtoRequest,
        hoursADay: req.body.hoursADay || PtoRequest[requestIndex].hoursADay
    };
    res.send('This time off request was updated.');
});



// DELETE a time off request by ID
router.delete('/:id', (req, res) => {

    const requestId = parseInt(req.params.id);
    const requestIndex = PtoRequest.findIndex(req => req.id === requestId);
    if (requestIndex === -1) return res.status(404).send('Time off request not found.');

    PtoRequest.splice(requestIndex, 1);
    res.send('Time off request deleted.');

    
});

//Error
export default router;