module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/topiclist');
    });

    app.use('/topiclist', require('./topiclist'));
    app.use('/topic', require('./topic'));
    app.use('/signin', require('./signin'));
    app.use('/signout', require('./signout'));
    app.use('/reply', require('./reply'));
    app.use('/search', require('./search'));
}