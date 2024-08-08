//Imports//
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import jsxViewEngine from 'jsx-view-engine';
import methodOverride from 'method-override';
import userNRoutes from './controllers/users.mjs'
import ptoRRoutes from './controllers/pto.mjs'
import db from './db/conn.mjs'

//variable declarations///==============================================================
dotenv.config();
const app = express();
const PORT = process.env.PORT || 1991;


//Set up my view engine//========================================================
app.set('view engine', 'jsx');
app.set('views' ,'./views');
app.engine('jsx', jsxViewEngine());

//Middleware//=====================================================================
app.use(express.json());

//Middleware for form use//=======================================================
app.use(express.urlencoded({extended:false}));

app.use(methodOverride('_method'));

//Routes//===========================================================================
app.use('/ptoR', ptoRRoutes);
app.use('/usersN', userNRoutes);

app.get('/',(req,res) => {
    res.send(
        `<div>this is my root route for pto and users <br/><a href ='/ptoR'>pto</a>
            <br/><a href='/users'>user</a>
            </div>`
    )
});

//Start server//===============================================================================
app.listen(PORT, () => {
    console.log('server is listening');
})






