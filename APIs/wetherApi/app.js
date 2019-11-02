var request = require("request");

console.log('Sunset in ');
request('https://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
    eval(require('locus'));
    if (!error && response.statusCode == 200) {
        var parsedData = JSON.parse(body);
        console.log(parsedData['query']['results']['channels']['astronomy']['sunset']);
    }
});