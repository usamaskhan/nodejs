var express 	= require('express');
var mongoose 	= require('mongoose');
var morgan		= require('morgan');
var bodyParser 	= require('body-parser');
var Project 	= require('./models/project');
var Category	=require('./models/category');
var Chef		=require('./models/chef');
var Recipe		=require('./models/recipe');
var Comment	=require('./models/comments');
var logger      = require('morgan');

var app 		= express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// db connection
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;



app.get('/', function (req, res) {
	res.send('Hello World!!!!!');
});


app.get('/api/project', function (req, res) {
	Project.find(function (err, data) {
		if (err) return res.json(err);
		res.json(data);
	});
});



app.get('/api/project/:_id', function (req, res) {
	Project.findById(req.params._id, function (err, data) {
		if (err) return res.json(err);
		res.json(data);
	});
});



app.get('/api/project/:f_name', function (req, res) {
	var f_name = req.params.f_name;
	Project.findOne({f_name: f_name},function (err, data) {
		if (err) return res.json(err);
		res.json(data);
	});
});

app.post('/api/project', function (req, res) {
	Project.create(req.body, {}, function (err, data) {
		if (err) return res.json(err);
		res.json(data);
	});
});



app.post('/api/project/:_id', function (req, res) {
	var id = req.params._id;
	Project.findByIdAndUpdate(id, req.body, { upsert: true }, function (err, data) {
		if (err) return res.json(err);
		res.json(data);
	});
});

app.put('/api/project/:_id', function (req, res) {
	var id = req.params._id;
	Project.findByIdAndUpdate(id, req.body, { upsert: true }, function (err, data) {
		if (err) return res.json(err);
		res.json(data);
	});
});

app.put('/api/project/:roll_no', function (req, res) {
	var roll_no = req.params.roll_no;
	Project.findByIdAndUpdate({Roll_no: roll_no}, req.body, { upsert: true }, function (err, data) {
		if (err) return res.json(err);
		res.json(data);
	});
});



app.delete('/api/project/:Roll_no', function (req, res) {
	var Roll_no = req.params.Roll_no;
	Project.findOneAndRemove({Roll_no: Roll_no}, {}, function (err, data) {
		if (err) return	res.json(err);
		res.json(data);
	});
});


//update by title
// app.put('/api/project/:title', function (req, res) {
// 	var title = req.params.title;
// 	Project.findByIdAndUpdate({ title: title }, req.body, { upsert: true }, function (err, data) {
// 		if (err) return res.json(err);
// 		res.json(data);
// 	});
// });



app.delete('/api/project/:id', function (req, res) {
	var id = req.params.id;
	Project.findByIdAndRemove(id, {}, function (err, data) {
		if (err) return	res.json(err);
		res.json(data);
	});
});


app.delete('/api/project/:Roll_no', function (req, res) {
	var Roll_no = req.params.Roll_no;
	Project.findOneAndRemove({Roll_no: Roll_no}, {}, function (err, data) {
		if (err) return	res.json(err);
		res.json(data);
	});
});



//categpry CRUD


app.get('/api/category', function (req, res) {
	Category.find(function (err, data) {
		if (err) return res.json(err);
		res.json(data);
	});
});

app.get('/api/category/:_id', function (req, res) {
	Category.findById(req.params._id, function (err, data) {
		if (err) return res.json(err);
		res.json(data);
	});
});

app.post('/api/category', function(req, res){
	Category.create(req.body,{}, function(err, data){
		if(err) return res.json(err);
		res.json(data);
	});
});

app.put('/api/category/:_id', function(req, res){
	var id = req.params._id;
	Category.findByIdAndUpdate(id, req.body,{upsert: true}, function(err, data){
		if(err) return res.json(err);
		res.json(data);
	});
});

app.delete('/api/category/:_id', function(req, res){
	var id = req.params._id;
	Category.findByIdAndRemove(id,{}, function(err, data){
		if(err) return res.json(err);
		res.json(data);
	});
});


// Chef CRUD

app.get('/api/chef', function(req, res){
	Chef.find(function(err, data){
		if(err) return res.json(err);
		res.json(data);
	});
});

app.get('/api/chef/:_id', function (req, res) {
	Chef.findById(req.params._id, function (err, data) {
		if (err) return res.json(err);
		res.json(data);
	});
});

app.post('/api/chef', function(req, res){
	Chef.create(req.body, {}, function(err, data){
		if(err) return res.json(err);
		res.json(data);
	});
});

app.put('/api/chef/:_id', function(req, res){
	var id = req.params._id;
	Chef.findByIdAndUpdate(id, req.body,{upsert: true}, function(err, data){
		if(err) return res.json(err);
		res.json(data);
	});
});

app.delete('/api/chef/:_id', function(req, res){
	var id = req.params._id;
	Chef.findByIdAndRemove(id,{}, function(err, data){
		if(err) return res.json(err);
		res.json(data);
	});
});

//recipies CRUD

app.get('/api/recipe', function(req, res){
	Recipe.find(function(err, data){
		if(err) return res.json(err);
		res.json(data);
	});
});

app.get('/api/recipe/:_id', function (req, res) {
	Recipe.findById(req.params._id, function (err, data) {
		if (err) return res.json(err);
		res.json(data);
	});
});

app.post('/api/recipe', function(req, res){
	Recipe.create(req.body, {}, function(err, data){
		if(err) return res.json(err);
		res.json(data);
	});
});

app.put('/api/recipe/:_id', function (req, res) {
	var id = req.params._id;
	Recipe.findByIdAndUpdate(id, req.body, { upsert: true }, function (err, data) {
		if (err) return res.json(err);
		res.json(data);
	});
});


app.delete('/api/recipe/:_id', function(req, res){
	var id = req.params._id;
	Recipe.findByIdAndRemove(id,{}, function(err, data){
		if(err) return res.json(err);
		res.json(data);
	});
});







app.listen(3000);
console.log('Server Is Connected ON Port 3000!!!');