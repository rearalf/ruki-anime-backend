const router = require('express').Router();

router.get('/test', (req, res) => {
	res.json({ message: 'Anime path' });
});

module.exports = router;
