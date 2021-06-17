const connection =require('./../../db/db');

const createNewAuthor = (req, res) => {
	const query = `INSERT INTO users (firstName, lastName, age, country,email, password, role_id) VALUES (?, ?, ?, ?,?, ?, ?)`;
	const data = [req.body.firstName, req.body.lastName, req.body.age, req.body.country, req.body.email, req.body.password, req.body.role ] 
	connection.query(query, data, (err, results) => {
		if(err) throw err;
	res.json(results);

	  });
};

module.exports = {
	createNewAuthor,
};
