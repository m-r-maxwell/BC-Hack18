const express = require('express');
const router = express.Router();
//const db = '../db1.js'
const client = require('../db1');

//   db.FindinCol1().then(function(items) {
//     console.info('The promise was fulfilled with items!', items);
//   }, function(err) {
//     console.error('The promise was rejected', err, err.stack);
//   });

router.get('/', function(req, res) {
    let data;
    client.FindinCol1().then(function(items) {
        console.log('works')
        console.info('The promise was fulfilled with items!', items);
        data = items;
        res.send({
            profile: data
         });
      }, function(err) {
        console.log('error')
        console.error('The promise was rejected', err, err.stack);
      });
});


// router.get('/students', function(req, res) {
    
//   db.FindinCol1().then(function(items) {
//     console.info('The promise was fulfilled with items!', items);
//   }, function(err) {
//     console.error('The promise was rejected', err, err.stack);
//   });
//     res.send({person:'me'
//     })
// });
router.post('/', function(req, res) {
    res.send({type: 'POST'})
});

module.exports = router;