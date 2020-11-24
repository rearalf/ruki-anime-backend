require('dotenv').config();
const app = require('./app');

async function server(){
	await app.listen(app.get('port'), () => {
		console.log('Server on port ', app.get('port'));
	});
}

server();
