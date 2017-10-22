var mongoose    =    require('mongoose');

var commentSchema   = mongoose.Schema({

        detail:{
            type: String
        },

        createDate:{
            type: Date,
            default: Date.now
        },
        updateDate:{
            type: Date,
            default: Date.now
        },
        postedBy:{
            type: String
        }





});

var Comment  =   module.exports  = mongoose.model('comment', commentSchema);      