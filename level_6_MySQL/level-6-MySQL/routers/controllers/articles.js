const connection =require('./../../db/db');

const getAllArticles = (req, res) => {
	const query = `SELECT * FROM articles WHERE is_deleted=0`;
	connection.query(query, (err, result) => {
	  if (err) throw err;
	  res.json(result);
})}

const getArticlesByAuthor = (author_id) => {
	const query = `SELECT * FROM articles WHERE author_id =? AND is_deleted=0 `;
     const data = [author_id];
	connection.query(query, (err, result) => {
	  if (err) throw err;
	  res.json(result);
}
	)};
	getArticlesByAuthor();

const getAnArticleById = (req, res) => {
	const _id = req.params.id;

	if (!_id) return res.status(404).json('not found');

	articlesModel
		.findOne({ _id })
		.populate('author', 'firstName -_id')
		.exec()
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			res.send(err);
		});
};

const createNewArticle = (req, res) => {
	const query = `INSERT INTO articles (title, description, author_id) VALUES (?, ?, ?)`;
	const data = [req.body.title, req.body.description, req.body.author_id ] 
	connection.query(query, data, (err, results) => {
		if(err) throw err;
	res.json(results);

	  });
};

const updateAnArticleById = (req, res) => {
	const query = `UPDATE articles SET title="hello " WHERE id =? `;
	const data = [req.params.id];
   connection.query(query, (err, result) => {
	 if (err) throw err;
	 res.json(result);
}
   )
};

const deleteArticleById = (req, res) => {
	const query = `UPDATE articles SET is_delete = 1 WHERE id =? `;
	const data =[req.params.id];
	connection.query(query,data,(err,result)=>{
	  if(err) throw err;
	  res.json('newly deleted article');
	})
  
};

const deleteArticlesByAuthor = (req, res) => {
	const query = `UPDATE articles SET is_delete = 1 WHERE author_id =? `;
	const data =[req.params.author_id];
	connection.query(query,data,(err,result)=>{
	  if(err) throw err;
	  res.json('newly deleted article');
	})
};

module.exports = {
	getAllArticles,
	getArticlesByAuthor,
	getAnArticleById,
	createNewArticle,
	updateAnArticleById,
	deleteArticleById,
	deleteArticlesByAuthor,
};
