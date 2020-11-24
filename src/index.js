require('dotenv').config();
const app = require('./app');
require('./database');

async function server(){
	await app.listen(app.get('port'), () => {
		console.log('Server on port ', app.get('port'));
	});
}

server();
