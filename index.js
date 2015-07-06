var _ = require('lodash');

module.exports = {
    init: function() {
    }
    , run: function(step, dexter) {
        var messages = step.input('messages')
          , lastMatch 
          , msg = messages && messages.length 
             ? _.find(messages, function(msg) {
                  return (lastMatch = msg.text.match(/<(http.+?)>/));
               })
             : null
        ; 

        if(!messages || !messages.length) {
            return this.fail({ message: 'No Messages Found' });
        }

        this.log('MESSAGES RECEIVED', messages);

        return this.complete({
            url: msg ? lastMatch[1].split('|')[0] : null
        });
    }
};
