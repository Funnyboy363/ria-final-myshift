const express = require('express');
const router = express.Router();

// /admin/add-shift => GET
router.get('/add-shift', (req, res, next) => {
    console.log('add shift route has been called ');
    res.send('<form action="/admin/shift" method="POST"><input type="text" name="title"><button type="submit">Add Shift</button></form>');
    });

// /admin/add-shift => POST
router.post('/shift', (req, res, next) => {
console.log(req.body);
res.redirect('/');
});





module.exports = router;