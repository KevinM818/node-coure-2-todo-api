// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server');

/*	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5b2836a2346ce5beedf9261a')
	}, {
		$set: {
			completed: true
		}
	}, {
		returnOriginal: false
	}).then(result => console.log(result)); */

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5b1483c5c8dbc2197c8f4408')
	}, {
		$set: {
			name: 'Kevin'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then(result => console.log(result));

	// db.close();
});
