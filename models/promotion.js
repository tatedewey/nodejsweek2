const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const promotionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {

        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: true
    },

    cost: {
        type: Currency,
        required: true,
        min: 0
    },
    timestamps: true
});

const Promotion= mongoose.model('promotion', promtionSchema);

module.exports = Promotion;