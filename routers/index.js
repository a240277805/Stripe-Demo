var express = require('express');
var router = express.Router();
var path = require('path');
var stripe = require("stripe")("sk_test_leDe9ofnJ3S4X2xoKV0xAHDm");
router.get('/',function(req,res,next){
    console.log('enter / req');
    res.render('teststripebtn');
});
router.post('/charge',function(req,res,next){

    //虽然是可选的，我们强烈建议还具有检测收集用户的邮政编码地址和邮政编码验证有助于减少欺诈。
    console.log('enter /charge req and the token is-----:'+req.body.stripeToken);

    // Set your secret key: remember to change this to your live secret key in production
    // See your keys here: https://dashboard.stripe.com/account/apikeys


    // Get the credit card details submitted by the form
    var token = req.body.stripeToken; // Using Express

    // Create a charge: this will charge the user's card
    var charge = stripe.charges.create({
        amount: 3000, // Amount in cents
        currency: "usd",
        source: token,
        description: "Example charge"
    }, function(err, charge) {
        if (err && err.type === 'StripeCardError') {
            // The card has been declined
            console.log(err);
            res.render('result',{
                message:err
            });
        }
        else {
            res.render('result',{
                message:'receive sucess result from server'
            });
        }

    });
})


module.exports=router;
