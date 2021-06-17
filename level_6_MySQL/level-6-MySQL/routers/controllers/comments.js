const connection =require('./../../db/db');

const createNewComment = (req, res) => {
const query = `INSERT INTO comments (comment,article_id,commenter_id) VALUES (?,?,?)`;
const data = [req.body.comments,req.body.article_id,req.body.commenter_id]
connection.query(query,data,(err,result)=>{
	if(err) throw err;
	res.json('newly created comment.');


})
};

module.exports = {
	createNewComment,
};
