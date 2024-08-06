import mongoose from 'mongoose';

// const PtoRequest = [
//     { id: 1, date: new Date("2024-09-01"), ptoRequest: "Personal-Day", hoursADay: 8 },
//     { id: 2, date: new Date("2024-10-25"), ptoRequest: "Vacation", hoursADay: 8 },
//     { id: 3, date: new Date("2024-12-17"), ptoRequest: "Family birthday", hoursADay: 8 },//my kids bday
//     { id: 4, date: new Date("2024-11-29"), ptoRequest: "Birthday", hoursADay: 8 }
// ];
const ptoSchema = new mongoose.Schema({
    Denied: {
     type: String,
     required: true
 },
    Approved: {
     type: String,
     required: true
    },
    PtoStatus: Boolean 
 });
 
 const Pto = mongoose.model('pto', ptoSchema);

export default Pto;