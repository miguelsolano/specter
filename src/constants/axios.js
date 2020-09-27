const axios = require('axios');
const specterConfig = require('../../specter.json');

const instance = axios.create({
	headers: {
		'Authorization': `Bearer ${specterConfig.token}`
	}
});

module.exports = {
  http: instance
}
