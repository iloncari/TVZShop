module.exports = function (app, express, db, jwt, secret, bcrypt) {
    let ObjectId = require('mongodb').ObjectId;
    let authRouter = express.Router();

    authRouter.post('/register', function (req, res) {
        db.collection('users').find({
            username: req.body.user.username
        }).toArray(function (err, rows) {
            if (err) {
                res.json({
                    status: 500,
                    message: 'Nešto je pošlo krivo!'
                });
            } else {
                if (rows.length > 0) {
                    res.json({
                        status: 464,
                        message: 'Korisničko ime se već koristi!'
                    });
                } else if (rows.length == 0) {
                    let hashedPassword = bcrypt.hashSync(req.body.user.password);
                    req.body.user.password = hashedPassword;
                    req.body.user.role = 'user';
                    db.collection('users').insertOne(req.body.user);
                    res.json({
                        status: 201,
                        message: 'Registracija uspješna!'
                    });
                }
            }
        });
    });

    authRouter.post('/login', function (req, res) {

        db.collection('users').find({
            username: req.body.user.username
        }).toArray(function (err, rows) {
            if (err) {
                res.json({
                    status: 500,
                    message: 'Nešto je pošlo krivo!'
                });
            } else {
                if (rows.length == 0) {
                    res.json({
                        status: 404,
                        message: 'Pogrešno korisničko ime ili lozinka!'
                    });
                } else {
                    bcrypt.compare(req.body.user.password, rows[0].password, function(err, valid){
                        if (valid){
                            var token = jwt.sign({
                                username: rows[0].username,
                                password: rows[0].password,
                                role: rows[0].role
                            }, secret, {
                                expiresIn: 86400
                            });

                            res.json({
                                status: 200,
                                message: 'Prijava uspješna!',
                                token: token,
                                user: rows[0]
                            });
                        } else {
                            res.json({
                                status: 404,
                                message:'Krivo korisničko ime ili lozinka!'
                            });
                        }
                    });
                }
            }
        });
    });

    return authRouter;
}