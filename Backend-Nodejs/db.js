import { mysql } from 'mysql'

var sql = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Senac2021",
  database: "db_workshop"
});

sql.connect(function(err) {
    if (err) throw err;
    sql.query("SELECT * FROM videos", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

export { sql };

// n funcionou