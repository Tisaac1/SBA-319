import mongoose from 'mongoose';

const ptoSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true
},
   Approval: {
    type: String,
    required: true
   },
   status: Boolean 
});

const Pto = mongoose.model('Pto', ptoSchema);

export default Pto;