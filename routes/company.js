var express    = require('express');
var router     = express.Router();
var path       = require('path');  
var cookies = require("cookies")

router.get('/',  function(req, res){
    
    console.log(" reached company.js ");
    var cookie = req.cookies.cname;    
    if (cookie == 'cvalue') {
        console.log('cookie already exists -> ' + cookie);
    } else {
        res.cookie('cname', 'cvalue');
        console.log('cookie created successfully');
    }
    return res.sendFile('company-cap.html', { root: path.join(__dirname) });
});

module.exports = router;
