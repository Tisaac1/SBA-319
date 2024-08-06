
import mongoose from 'mongoose';

const Users = [
    {id: 1, name: "Tiffany Isaac", hireYear: 2020, title: "QA Engineer" },
    {id: 2, name: "Tina Snow", hireYear: 2017, title: "Director of sound" },
    {id: 3, name: "Wolverine Jack", hireYear: 2002, title: "Security" },
    {id: 4, name: "Dead Pool", hireYear: 2011, title: "Communication specialist" },
    {id: 5, name: "Chris Evans", hireYear: 2024, title: "Supervisor" },
];

const userSchema = new mongoose.Schema({
   Active: {
    type: String,
    required: true
},
   Inactive: {
    type: String,
    required: true
   },
   readyToEat: Boolean 
});

const User = mongoose.model('user', userSchema);

export default User;
