const { Schema, model } = require('mongoose');

const tokenSchema = new Schema(
    {
        token: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const tokenModel = model('Token', tokenSchema);

module.exports = { tokenModel };
