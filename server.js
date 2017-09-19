import { Server } from 'http';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

const app = express();
const server = new Server(app);

app.use(cookieParser());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static(__dirname + '/public'));

// app.use("/users", express.static(path.resolve(__dirname, './public')));
// app.use("/memories", express.static(path.resolve(__dirname, './public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: true,
//   saveUninitialized: true,
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash())

app.get('*', function(req, res) {
  res.render('index');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
