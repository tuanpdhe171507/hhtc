const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String, 
        validate:{
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        },
        required: [true,'Email is required'], unique: true 
    },
    password: { type: String, required: [true,'Password is required']},
    address:{ type: String, required: true },
    phone: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^0\d{9}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    
    
});

customerSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});



module.exports = mongoose.model('Customer', customerSchema);
