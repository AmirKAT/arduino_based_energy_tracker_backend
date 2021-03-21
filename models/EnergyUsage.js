const mongoose = require('mongoose');

const EnergyUsageSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    Kwh: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },

    date: {
        type: String,
        default: Date.now
    },

});

module.exports = mongoose.model('energyusage', EnergyUsageSchema);