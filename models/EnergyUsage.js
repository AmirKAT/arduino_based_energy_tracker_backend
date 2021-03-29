const mongoose = require('mongoose');

const EnergyUsageSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    Kwh: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true
    },

    date: {
        type: String,
        default: Date.now
    },

});

module.exports = mongoose.model('energyusage', EnergyUsageSchema);