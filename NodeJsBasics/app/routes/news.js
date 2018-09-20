module.exports = function (app) {

        app.get("/news", function (req, res) {

            var mysql = require('mysql');

            var connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '1234',
                database: 'newsportal'
            });
        
            connection.query('select * from article', function(error, result){
                //res.send(result);
                res.render("articles/news.ejs", {newsvar: result});
            });
            //res.render("articles/politics.ejs");
        });

}
