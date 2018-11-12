/**
 * RbgtrackerController
 *
 * @description :: Server-side logic for managing rbgtrackers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
        pvpstats : function(req, res) {                
               
                console.log("Query Parameters: ", req.query);
                WowpvpstatsService.getMyInfo(req.headers, req.query, function(err, response, data) {
                        if (err) {
                                return res.send(err)
                        };
						
                        // Building object for LaMetric. We will return it
                    
                        var responseObj={};
                                        
                        responseObj.frames=[];
                    
                        var frame0 = {
                                'text': 'WOW PVP',
                                'icon':'i14665',
                                'index':0
                        };
                    
                        var frame1 = {
                                'text': 'NAME',
                                'icon':'',
                                'index':1
                        };  

                        var frame2 = {
                                'text': '3s:',
                                'icon':'i14684',
                                'index':2
                        };    

                        //var frame3 = {
                        //        'text': '3s:',
                        //        'icon':'i14684',
                        //        'index':3
                        //};    

                        //var frame4 = {
                        //        'text': 'bg:',
                        //        'icon':'i14684',
                        //        'index':4
                        //};                                                                                                               

                        // Checking if we have required parameters passed to our API. 
                        if (req.query.characterId === '' || req.query.characterId === undefined || req.query.serverId === '' || req.query.serverId === undefined || req.query.regionId === '' || req.query.regionId === undefined) {
                            frame1.text = 'INSERT', 
                            frame2.text = 'DATA'
                        }   
                    
                        else{
                        // Getting character stats from Blizzard API response.
                            frame0.text = 'WOW PVP',
                            frame1.text = data.name
                            //frame2.text = '2s:'+data.pvp.brackets.ARENA_BRACKET_2v2.rating,
                            frame2.text = '3S:'+data.pvp.brackets.ARENA_BRACKET_3v3.rating,
                            //frame4.text = 'bg:'+data.pvp.brackets.ARENA_BRACKET_RBG.rating;    
                        } 

                        if (data.class === 2) {
                            //frame1.text = 'class: paladin',
                            frame1.icon = 'i15437';
                        }     

                        else if (data.class === 3) {
                            //frame1.text = 'class: hunter',
                            frame1.icon = 'i15434';
                        }     

                        else if (data.class === 4) {
                            //frame1.text = 'class: rogue',
                            frame1.icon = 'i15439';
                        }   

                        else if (data.class === 5) {
                            //frame1.text = 'class: priest',
                            frame1.icon = 'i15438';
                        } 

                        else if (data.class === 6) {
                            //frame1.text = 'class: death knight',
                            frame1.icon = 'i15429';
                        }                         

                        else if (data.class === 7) {
                            //frame1.text = 'class: shaman',
                            frame1.icon = 'i15458';
                        }   

                        else if (data.class === 8) {
                            //frame1.text = 'class: mage',
                            frame1.icon = 'i15435';
                        }                          

                        else if (data.class === 9) {
                            //frame1.text = 'class: warlock',
                            frame1.icon = 'i15463';
                        }  

                        else if (data.class === 10) {
                            //frame1.text = 'class: monk',
                            frame1.icon = 'i15463';
                        }                         

                        else if (data.class === 11) {
                           //frame1.text = 'class: druid',
                            frame1.icon = 'i15462';
                        }   

                        else if (data.class === 12) {
                            //frame1.text = 'class: demon hunter',
                            frame1.icon = 'i15430';
                        }  

                        else{
                            //frame1.text = 'class: warrior',
                            frame1.icon = 'i14684';
                        }                                        
                        
                        responseObj.frames.push(frame0, frame1, frame2, frame3, frame4);
					
                        if (!data) {
                            console.log("Error: ", response.statusCode);
                            res.status(response.statusCode).send(response.body);
                        } else {
                            console.log("Response: ", responseObj);
                            return res.status(200).json(responseObj);
                        }					
					
                })
        },
};
