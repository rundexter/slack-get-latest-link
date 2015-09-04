var _ = require('lodash')
    , env = require('./env')
    ;

module.exports = _.merge({
    simulation: true
    , instance_id : 'local_test_instance'
    , urls: {
        home : "http://rundexter.com/"
    }
    , instance_state: {
        active_step :  "local_test_step"
    }
    , workflow: {
        "id"            : "local_test_workflow"
        , "title"       : "Local test workflow"
        , "description" : "A fixture workflow used to test a module"
    }
    , steps: {
        local_test_step: {
            id: 'local_test_step'
            , type: 'module'
            //The test runner will change YOUR_MODULE_NAME to the correct module name
            , name: 'YOUR_MODULE_NAME'
            , next: []
        }
    }
    , modules: {
    }
    , data: {
        local_test_step: {
            input: {
                text: [
                    'Nothing to see in http!'
                    , 'I didn\'t find anything.'
                    , 'I found the answer on http://google.com'
                    , 'Google now knows more about me than my http://parents.com!'
                ],
                attachment: [null, {
                    "title": "(Super Low-Tech) Apple Watch",
                    "title_link": "http://www.hinemizushima.com/72050/6059931/felt-sculptures/apple-watch",
                    "text": "Yes, I already got it.",
                    "fallback": "(Super Low-Tech) Apple Watch",
                    "image_url": "https://mir-cdn.behance.net/v1/rendition/projects/202/467b0a24375579.55164f27b2496.jpg",
                    "from_url": "http://www.hinemizushima.com/72050/6059931/felt-sculptures/apple-watch",
                    "image_width": 202,
                    "image_height": 158,
                    "image_bytes": 16438,
                    "id": 1
                }, null, null]
            }
        }
    }
}, env);
