const mongoose = require('mongoose')
const dbConnection = require('../config/systemConfig').dbConnection

// Imports model.
require('./userInfo')
require('./bookInfo')
require('./userBookInfo')
require('./bookStoreInfo')
require('./userFriendInfo')

exports.UserInfo = mongoose.model('user')
exports.BookInfo = mongoose.model('book')
exports.UserBookInfo = mongoose.model('userbook')
exports.BookStoreInfo = mongoose.model('bookstore')
exports.UserFriend = mongoose.model('userfriend')

// Connecting the mongoDB.
mongoose.Promise = global.Promise
mongoose.connect(dbConnection)
const db = mongoose.connection

/**
 * Conneting function.
 */
db.on('error', function () {
  console.log('Fails to connect mongoDB')
})
db.once('open', function () {
  console.log('Connect mongodb is successful')
})
