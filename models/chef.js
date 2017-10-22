var mongoose = require('mongoose');

var chefSchema = mongoose.Schema({

    name:{
        type: String
    },
    joiningDate:{
        type: Date
    },
    description:{
        type: String
    },
    create_date:{
        type: Date,
        default: Date.now
    },
    update_date:{
        type: Date,
        default: Date.now
    }
});

var Chef = module.exports = mongoose.model('chef', chefSchema);