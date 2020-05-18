var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
    {
        name: { type: String, required: true, min: 3, max: 100 },
    }
);

GenreSchema.virtual('genre').get(function () {
    return this.name;
});

// Virtual for bookinstance's URL
GenreSchema.virtual('url').get(function () {
    return '/catalog/genre/' + this._id;
})

// Export the model
module.exports = mongoose.model('Genre', GenreSchema);