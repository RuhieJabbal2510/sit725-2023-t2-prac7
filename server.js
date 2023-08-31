let express = require('express');
let app = express();
require('./dBConnection'); 
let router = require('./routers/router');
let port = process.env.port || 3000;
let http = require('http').createServer(app);

const { Socket } = require('socket.io');
let io = require('socket.io')(http);
//const uri = "mongodb+srv://ruhie2510:ruhie2510@cluster0.b5gegtd.mongodb.net/?retryWrites=true&w=majority";
//let collection;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/cat',router);

/*async function run() {
    try {
      await client.connect();
      collection = client.db().collection('Cats');
      console.log(collection);
    } catch(ex) {
      console.error(ex);
    }
}

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

app.get('/', function (req,res) {
    res.render('index.html');
});

app.post('/api/cat', function(req,res){
    // ask DB to post this CAT
    let cat = req.body;
    insertCat(cat, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
});

function insertCat(cat, callback) {
    collection.insertOne(cat,callback);
}

app.get('/api/cats', (req,res)=>{
    getAllCats((err,result)=>{
        if (!err) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
});

function getAllCats(callback) {
    collection.find({}).toArray(callback);
}*/
io.on('connection', (socket) => {
    console.log('a client is connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 1000);
});
http.listen(port, ()=>{
    console.log('express server started');
    
});