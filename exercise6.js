var mongo = require('mongodb').MongoClient,
    url = 'mongodb://localhost:27017/learnyoumongo',
    ageparam = parseInt(process.argv[2])
mongo.connect(url, function(err, db) {
	if (err) throw err
	var parrots = db.collection('parrots')
	parrots.count({
		age: {
			$gt: ageparam
		}
	}, function(err, count) {
		if (err) throw err
		console.log(count)
		db.close()
	})
})