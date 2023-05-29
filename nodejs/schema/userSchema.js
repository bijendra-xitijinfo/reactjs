const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        contact: {
            type: String,
            required: true,
            unique: true,
        },
        address: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        post: [
            {
                postName: String,
                postDescription: String,
                like: Number,
                dislike: Number,
            }
        ]
    },
    { timestamps: true }
);
userSchema.plugin(mongoosePaginate);

const userModel = model('User', userSchema);

module.exports = { userModel };
