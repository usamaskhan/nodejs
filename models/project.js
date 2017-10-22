var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({

    f_name: {
        type: String,
    },
    l_name: {
        type: String,
    },
    Father_name: {
        type: String

    },
    Class: {
        type: String

    },
    Section: {
        type: String

    },
    Roll_no: {
        type: String

    },
    School: {
        type: String

    },
    create_date: {
        type: Date,
        default: Date.now
    }

});

var Project = module.exports = mongoose.model('project', projectSchema);    