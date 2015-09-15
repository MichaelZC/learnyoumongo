var mongo = require('mongodb').MongoClient,
    url = 'mongodb://localhost:27017/learnyoumongo',
    first = process.argv[2],
    last = process.argv[3]

mongo.connect(url, function(err, db) {
    if (err) throw err
    var target = db.collection('docs'),
        newDoc = JSON.stringify({
            firstName: first,
            lastName: last
        })
    console.log(newDoc)
    target.insert(newDoc, function(err, db) {
        if (err) throw err
        db.close()
    })
})
