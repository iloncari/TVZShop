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



    apiRouter.route('/advertisement').get(function (req, res) {

        this.filter = {};
            if (req.query.type)
                this.filter.type = req.query.type;

            if (req.query.status)
                this.filter.status = req.query.status;

            if (req.query.brand)
                this.filter.brand = req.query.brand;

            if (req.query.model)
                this.filter.model = req.query.model;

            if (req.query.minPrice && req.query.maxPrice)
                this.filter.price = {$lte: parseInt(req.query.maxPrice), $gte: parseInt(req.query.minPrice)};
            else if (req.query.maxPrice)
                this.filter.price = {$lte: parseInt(req.query.maxPrice)};
            else if (req.query.minPrice)
                this.filter.price = {$gte: parseInt(req.query.minPrice)};

            if (req.query.minYear && req.query.maxYear)
                this.filter.year = {$lte: parseInt(req.query.maxYear), $gte: parseInt(req.query.minYear)};
            else if (req.query.maxYear)
                this.filter.year = {$lte: parseInt(req.query.maxYear)};
            else if (req.query.minYear)
                this.filter.year = {$gte: parseInt(req.query.minYear)};

            if (req.query.minKm && req.query.maxKm)
                this.filter.km = {$lte: parseInt(req.query.maxKm), $gte: parseInt(req.query.minKm)};
            else if (req.query.maxKm)
                this.filter.km = {$lte: parseInt(req.query.maxKm)};
            else if (req.query.minKm)
                this.filter.km = {$gte: parseInt(req.query.minKm)};

            if (req.query.minWh && req.query.maxWh)
                this.filter.wh = {$lte: parseInt(req.query.maxWh), $gte: parseInt(req.query.minWh)};
            else if (req.query.maxWh)
                this.filter.wh = {$lte: parseInt(req.query.maxWh)};
            else if (req.query.minWh)
                this.filter.wh = {$gte: parseInt(req.query.minWh)};

            if (req.query.minPower && req.query.maxPower)
                this.filter.power = {$lte: parseInt(req.query.maxPower), $gte: parseInt(req.query.minPower)};
            else if (req.query.maxPower)
                this.filter.power = {$lte: parseInt(req.query.maxPower)};
            else if (req.query.minPower)
                this.filter.power = {$gte: parseInt(req.query.minPower)};

            if (req.query.fuelType)
                this.filter.fuelType = req.query.fuelType;

            if (req.query.minScreen && req.query.maxScreen)
                this.filter.screen = {$lte: parseInt(req.query.maxScreen), $gte: parseInt(req.query.minScreen)};
            else if (req.query.maxScreen)
                this.filter.screen = {$lte: parseInt(req.query.maxScreen)};
            else if (req.query.minScreen)
                this.filter.screen = {$gte: parseInt(req.query.minScreen)};

            if (req.query.minHD && req.query.maxHD)
                this.filter.hd = {$lte: parseInt(req.query.maxHD), $gte: parseInt(req.query.minHD)};
            else if (req.query.maxHD)
                this.filter.hd = {$lte: parseInt(req.query.maxHD)};
            else if (req.query.minHD)
                this.filter.hd = {$gte: parseInt(req.query.minHD)};

            if (req.query.minSSD && req.query.maxSSD)
                this.filter.ssd = {$lte: parseInt(req.query.maxSSD), $gte: parseInt(req.query.minSSD)};
            else if (req.query.maxSSD)
                this.filter.ssd = {$lte: parseInt(req.query.maxSSD)};
            else if (req.query.minSSD)
                this.filter.ssd = {$gte: parseInt(req.query.minSSD)};

            if (req.query.minRAM && req.query.maxRAM)
                this.filter.ram = {$lte: parseInt(req.query.maxRAM), $gte: parseInt(req.query.minRAM)};
            else if (req.query.maxRAM)
                this.filter.ram = {$lte: parseInt(req.query.maxRAM)};
            else if (req.query.minRAM)
                this.filter.ram = {$gte: parseInt(req.query.minRAM)};

            if (req.query.screen)
                this.filter.screen = req.query.screen;

            if(req.query.adId && Array.isArray(req.query.adId)){
                this.filter.$or = [];
                req.query.adId.forEach(id => {this.filter.$or.push({_id: ObjectId(id)});});
            }else if(req.query.adId && !Array.isArray(req.query.adId)){
                this.filter._id = ObjectId(req.query.adId);
            }

             if (req.query.userId)
                 this.filter.userId = ObjectId(req.query.userId);

             this.limit;
             if (req.query.limit) {
                 this.limit = req.query.limit;
             }

             db.collection('advertisement').find(this.filter).limit(parseInt(this.limit)).toArray(function (err, rows) {
                if (!err) {
                    res.json({status: 200, advertisements: rows});
                } else {
                    res.json({status: 404});
                }
            });
    });

    apiRouter.route('/details').get(function (req, res) {
        db.collection('advertisement').find({_id: ObjectId(req.query.id)}).toArray(function (err, rows) {
            if (!err) {
                res.json({status: 200, advertisement: rows[0]});
            } else {
                console.log(err);
                res.json({status: 404});
            }
        });
    });

    apiRouter.route('/advertisement').put(function (req, res) {
        req.body.ad._id=ObjectId(req.query.id);
        req.body.ad.userId=ObjectId(req.body.ad.userId);
        db.collection('advertisement').updateOne({
            _id: ObjectId(req.query.id)
        }, {
            $set: req.body.ad
        }, function (err, data) {
            if (!err) {
                res.json({status: 201, changedRows: data.nModified});
            } else {
                res.json({status: 500});
            }
        });
    });

    apiRouter.route('/advertisement').delete(function (req, res) {
        db.collection('advertisement').removeOne({
            _id: ObjectId(req.query.id)
        }, function (err, data) {
            if (!err) {
                res.json({status: 200, affectedRows: data.nModifiedd});
            } else
                res.json({status: 500});
        });
    });

    apiRouter.route('/advertisement').post(async function (req, res) {
        let ad = req.body.ad;
        ad.userId = ObjectId(ad.userId);
        ad.date = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear();
        let params = {
            engine: 'Google',
            q: ad.brand + " " + ad.model,
            search_type: 'images',
            images_page: '1',
            gl: 'hr',
            hl: 'hr',
            location: 'Croatia'
        };
        let serpwow = new SerpWow('4508DC1745D241E6B4419D2A0C0E08FE');
        serpwow.json(params).then(result => {
            if (result.request_info.success == true && result.image_results.length > 0)
                ad.image = result.image_results[0].image;
            db.collection('advertisement').insertOne(ad, function (err, data) {
                if (!err) {
                    res.json({status: 201, ad: ad});
                } else
                    res.json({status: 500});
            });
        }).catch(error => {
            db.collection('advertisement').insertOne(ad, function (err, data) {
                if (!err) {
                    res.json({status: 201, ad: ad});
                } else
                    res.json({status: 500});
            });
        });
    });



    apiRouter.route('/brand/:brandType').get(function (req, res) {
        db.collection('brand').find({brandType: req.params.brandType}).toArray(function (err, rows) {
            if (!err) {
                res.json({status: 200, brands: rows});
            } else {
                res.json({status: 404});
            }
        });
    });

    apiRouter.route('/brand/:brandName/models').get(function (req, res) {
        db.collection('model').find({brandName: req.params.brandName}).toArray(function (err, rows) {
            if (!err) {
                res.json({status: 200, models: rows});
            } else {
                res.json({status: 404});
            }
        });
    });

    return apiRouter;

};