const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    speciality: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Speciality',
        required: true
    },
    medicalLicenseNumber: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: ''
    },
    profilePicture: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    numberOfReviews: {
        type: Number,
        default: 0
    },
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    }],
    numberOfAppointments: {
        type: Number,
        default: 0
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Doctor', doctorSchema);