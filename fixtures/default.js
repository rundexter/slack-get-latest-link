var fs = require('fs');

module.exports = {
    "input": {
        "messages": JSON.parse(fs.readFileSync(__dirname + '/messages.json')).channel_history
    },
    "privates": {
       /*
        * e.g. oauth keys, slack tokens
        * "instapaper_consumer_key": "somerandomcharacters",
        * "instapaper_consumer_secret": "somemorerandomcharacters"
        */
    },
    "providers": {
       "instapaper": {
          "access_token": "{\"oauth_token_secret\":\"providerdatacapturedydexter\",\"oauth_token\":\"moreproviderdatacapturedbydexter\"}"
       }
    }, 
    "settings": {
       /*
        * settings data passed to the step
        * "mustache": "A sample {mustache} template"
        */
    }
};
