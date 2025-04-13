const axios = require('axios');

(async () => {
  try {
    const response = await axios.get('https://bcra-proxy-railway-production.up.railway.app/consulta/20426696690');
    console.log(response.data);
  } catch (error) {
    console.error('Error desde test.js:', error.message);
  }
})();
