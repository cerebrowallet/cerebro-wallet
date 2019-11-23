module.exports = function (app) {
    app.get('/manifest.json', (req, res, next) => {
        res.set({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': 'GET'
        });
        next();
    })
};
