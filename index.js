var _ = require('lodash')
    //From:
    //http://stackoverflow.com/a/6041965
    , reTest = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/
    ;

module.exports = {
    init: function() {
    }
    , run: function(step, dexter) {
        var text = step.input('text')
          , attachments = step.input('attachment')
          , items = text.length || attachments.length
          , toTest = []
          , match
          , i
        ; 

        if(text.length !== 0 && attachments.length !== 0
           && text.length != attachments.length) {
               return this.fail('If you pass both text and attachments, they must be the same length');
        }
        for(i = 0; i < items; i ++) {
            toTest.push([]);
            if(attachments[i]) {
                if(attachments[i].title_link) {
                    toTest[i].push(attachments[i].title_link);
                    //No need to go further with this index, since we KNOW this is a link
                    continue;
                }
                if(attachments[i].text) {
                    toTest[i].push(attachments[i].text);
                }
            }
            if(text[i]) {
                toTest[i].push(text[i]);
            }
        }

        _.each(toTest, function(tests) {
            _.each(tests, function(test) {
                match = test.match(reTest);
                if(match) {
                    match = match[0];
                    return false;
                }
            });
            if(match) {
                return false;
            }
        });
        if(match) {
            this.complete({ url: match });
            return false;
        }
    }
};
