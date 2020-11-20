module.exports = function (app, express, db, jwt, secret, SerpWow) {

    let ObjectId = require('mongodb').ObjectId;
    let apiRouter = express.Router();
    apiRouter.route('/counties').get(function (req, res) {
        db.collection('county').find({}).toArray(function (err, rows) {
            if (!err) {
                res.json({status: 200, counties: rows});
            } else {
                res.json({status: 404});
            }
        });
    });


    apiRouter.route('/counties/:county/cities').get(function (req, res) {

        db.collection('city').find({county: req.params.county}).toArray(function (err, rows) {
            if (!err) {
                res.json({status: 200, cities: rows});
            } else {
                res.json({status: 404});
            }
        });
    });
    return apiRouter;

}