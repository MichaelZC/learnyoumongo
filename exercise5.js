var mongo = require('mongodb').MongoClient,
    url = 'mongodb://localhost:27017/' + process.argv[2],
    collection = process.argv[3],
    id = process.argv[4]

mongo.connect(url, function(err, data) {
	if (err) throw err
	var coll = data.collection(collection)
	coll.remove({
		_id: id
	}, function(err, data) {
		if (err) throw err
		db.close()
	})
})