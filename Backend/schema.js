const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        chapter: String,
        verse: String,
        shlok: String,
        transalation: String,
        language_translated: String
    }
);

// Table name = shloks

module.exports = mongoose.model('shloks', productSchema);