var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String, required: true},
    bio: {type: String, required: true},
    links: [{ type: Schema.ObjectId, ref: 'Url' }]
});

// Virtual for this book instance URL.
BookSchema
.virtual('url')
.get(function () {
  return '/catalog/book/'+this._id;
});

// Export model.
module.exports = mongoose.model('Book', BookSchema);
