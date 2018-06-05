var express = require('express');
app = express();
port = process.env.PORT || 3000;
mongoose = require('mongoose');


bodyParser = require('body-parser');
cors = require('cors');
var morgan      = require('morgan');

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
//app.set('superSecret', 'Sondley2318');//create a variable


var http = require('http');
var request = require('request');
var qs = require('querystring');
var util = require('util');
var cookieParser = require('cookie-parser');
var session = require('express-session');



// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use morgan to log requests to the console
app.use(morgan('dev'));

//var connectMongoOnline='mongodb://Boxx:Boxx123456@@ds111430.mlab.com:11430/crypto';
//mongodb://<dbuser>:<dbpassword>@ds113640.mlab.com:13640/crypto
//mongodb://<dbuser>:<dbpassword>@ds111430.mlab.com:11430/crypto
var connectMongoOnline='mongodb://localhost:27017/sondley';
// var connectMongoOnline='mongodb://leyloo:Sondley2318@ds259245.mlab.com:59245/sondley';
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(connectMongoOnline);
//mongoose.connect('mongodb://localhost/Tododb');


var routes = require('./api/routes/usersRoutes'); //importing route

var route2 = require('./api/routes/typeTokenRoute'); //importing route
var route1 = require('./api/routes/tokenRoute'); //importing route
var route3 = require('./api/routes/jobRoutes'); //importing route
var route4 = require('./api/routes/categoryRoutes'); //importing route
var route5 = require('./api/routes/stateRoutes'); //importing route
var route6 = require('./api/routes/typeUserRoute'); //importing route
var route7 = require('./api/routes/applyJobRoute'); //importing route
var route8 = require('./api/routes/typeJobRoute'); //importing route


routes(app); //register the route
route1(app);
route2(app);
route3(app);
route4(app);
route5(app);
route6(app);
route7(app);
route8(app);


app.listen(port);




//console.log(app);


console.log('todo list RESTful API server started on: ' + port);












