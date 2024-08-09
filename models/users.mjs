
import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true
},
   Approval: {
    type: String,
    required: true
   },
   Status: Boolean 
});

const Users = mongoose.model('users', usersSchema);

export default Users;
