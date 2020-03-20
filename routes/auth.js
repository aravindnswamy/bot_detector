var express    = require('express');
var router     = express.Router();
var request    = require('request');
var ip         =  "http://35.200.153.13:3000";                                        // bot detector ip + port

router.post('/',  function(req, res){

    console.log( "request reached auth.", req.body );

    var authorised = "no";
    if( req.body.username == req.body.password  )  authorised = "yes";
    var response;
    var promise_bot_detector = new Promise(function (resolve, reject) {
        request.post({ 
            name    : "request-to-bot-detector", 
            url     : ip + "/getscoreslogin" ,
            body    : { form        : req.body , 
                        username    : req.body.username,
                        headers     : req.headers, 
                        hostname    : req.hostname , 
                        ip          : req.connection.remoteAddress,
                        cookies     : req.cookies,
                        authorised  : authorised,
                        service_id  : "temp_service_id"
                    }, 
            json    : true 
        },
        function (err , request_to_bot_detector , response_from_bot_detector ){
            //  Post Bot detection code
            response = response_from_bot_detector;
            resolve("done");
        });
    }).then ( function ( resolved_value ) {
        return res.send (  response   );    
    });
});

module.exports = router;
