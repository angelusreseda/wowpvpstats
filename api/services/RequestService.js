var request = require('request');
module.exports = {
        /**
         * Method: getData
         * @return json
         * returns Response called API method
         */
        getData: function(url, header, queryParams, callback) {
                console.log("GET: ", url);
                console.log("QS: ", queryParams);
                console.log("Headers: ", header);		
		
                request.get({
                        url: url,
						qs: queryParams,
                        headers: header,
                        rejectUnauthorized: true,
                }, function(error, response, body) {
                        if (error) {
                                callback(error, response, null);
                        } else {
                                try {
                                        callback(null, response, JSON.parse(body));
                                } catch (err) {
                                        callback(err, response);
                                }
                        }
                });
        }
}