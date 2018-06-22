const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b2d126fcc51d8c40fc9218011';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then(todos => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then(todos => {
// 	console.log('Todo', todos);
// });

// Todo.findById(id).then(todo =>{
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo by Id', todo)
// }).catch(e => console.log(e));


User.findById('5b2a6ba81451870c2d805cd1').then(user => {
	if (!user) {
		return console.log('User not found');
	}
	console.log(JSON.stringify(user, undefined, 2));
}, e => console.log(e));

