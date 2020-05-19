const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FavoritesSchema = new Schema({
    _id: {
        type: String
    },
    favorites: {
        type: [
            "mixed"
        ]
    }
});

module.exports = Favorites = mongoose.model('favorites', FavoritesSchema);
