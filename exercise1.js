var mongo = require('mongodb').MongoClient,
    age = parseInt(process.argv[2])


mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    if (err) throw err
    var parrots = db.collection('parrots')
    parrots.find({
        age: {$gt: age}
    }).toArray(function(err, documents) {
        if (err) throw err
        else console.log(documents)
        db.close()
    })
})
