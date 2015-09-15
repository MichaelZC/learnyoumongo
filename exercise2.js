var mongo = require('mongodb').MongoClient,
    age = parseInt(process.argv[2])

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    if (err) throw err
    var parrots = db.collection('parrots');
    parrots.find({
        age: {
            $gt: age
        }
    }, {
        age: 1,
        name: 1, _id: 0

    }).toArray(function(err, data) {
        if (err) throw err
        console.log(data)
        db.close()
    })
})
