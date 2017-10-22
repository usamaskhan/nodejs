var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({

    title: {
        type: String,
    },
   chefId: {
        type: String,
    },
    views: {
        type: String

    },
    image: {
        type: String

    },
    prepareTime: {
        type: String

    },
    cookTime: {
        type: String

    },
    serving: {
        type: String

    },
    ingredients: {
        type: String
    },
    method: {
        type: String
    },
    create_Date:{
        type: Date,
        default: Date.now
    }
});

var Recipe = module.exports = mongoose.model('recipe', recipeSchema);    