const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/public_services_DB');
module.exports = mongoose;