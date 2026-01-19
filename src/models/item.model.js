const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    price: {
        type: Number,
        required: [true, 'Please add a price']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Duplicate the ID field.
itemSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialized.
itemSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

module.exports = mongoose.model('Item', itemSchema);
