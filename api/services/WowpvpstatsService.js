module.exports = {
        /**
         * Method: getMyInfo
         * @return json
         * returns Gets authenticated user profile
         */
        getMyInfo: function(headers, parameters, callback) {
                var url = 'https://' +parameters.regionId+sails.config.wowpvpstats.baseUrl+parameters.serverId+ '/' +parameters.characterId+sails.config.wowpvpstats.appId;            
				
				var params = [		
					{
						id:parameters.regionId			
					},						
					{
						id:parameters.serverId			
					},
					{
						id:parameters.characterId					
					}									
				];

				var postHeader={
					'User-Agent': headers.host,
					'Accept':'application/json',
					'Authorization':headers.authorization // pass authorization header received in request
                };
                RequestService.getData(url, postHeader, params, callback);
        },
}