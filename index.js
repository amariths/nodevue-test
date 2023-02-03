const axios = require('axios');

axios.get('https://avancera.app/cities/')
  .then(resp => {

    console.log(resp.data.length);
});
    
    
    'https://avancera.app/cities/'