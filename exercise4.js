var mongo = require('mongodb').MongoClient,
    url = 'mongodb://localhost:27017/learnyoumongo',
    dbName = process.argv[2]

mongo.connect('mongodb://localhost:27017/' + dbName, function(err, db) {
    if (err) throw err
    var users = db.collection('users')
    users.update({
        name: 'Tina'
    }, {
        $set: {
            age: 40
        }
    }, function(err, doc) {if (err) throw err;
    	db.close()})
})
