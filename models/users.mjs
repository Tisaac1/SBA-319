
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

const User = mongoose.model('User', usersSchema);

export default User;
