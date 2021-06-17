const connection  = require('./../../db/db');

const createNewRole = (req, res) => {
	const query = `INSERT INTO roles (role) VALUES (?)`;
const data = [req.body.role]
connection.query(query,data,(err,result)=>{
	if(err) throw err;
	res.json("ADDING SUCCESSFULLY");


})
};

module.exports = {
	createNewRole,
};
