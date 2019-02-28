
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/TraceIt';

var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '/home/sephiroth/Pictures')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({storage: storage});

router.post('/fileUpload', upload.single('image'), (req, res, next) => {
    MongoClient.connect(url,(err, database) => {
        assert.equal(null, err);
        // console.log(req.file.filename)
        insertDocuments(database, '/home/sephiroth/Pictures/' + req.file.filename, () => {
            database.close();    
        });
    });
    const spawn = require("child_process").spawn;
    var filePath='/home/sephiroth/Pictures/'+req.file.filename;
    // console.log('entered');
    // console.log(filePath);
    const pythonProcess = spawn('python3',["./ocr/ocr.py", filePath]);
    // console.log(pythonProcess)
    pythonProcess.stdout.on('data', (data) => {
        // console.log(typeof(data))
        res.send(JSON.parse(data.toString()));
    });
});



module.exports = router;

var insertDocuments = function(database, filePath, callback) {
    const db_name=database.db('TraceIt')

    var collection = db_name.collection('images');
    collection.insertOne({'imagePath' : filePath }, (err, result) => {
        assert.equal(err, null);
        callback(result);
    });
}