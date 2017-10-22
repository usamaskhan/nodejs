var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({

    title: {
        type: String,
    },
    description:{
        type: String
    },

    create_date: {
        type: Date,
        default: Date.now
    }

});

var Category = module.exports = mongoose.model('category', categorySchema);    