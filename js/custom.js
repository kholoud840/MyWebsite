

$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '1834020412',
        limit: 3,
        resolution: 'standard_resolution',
        accessToken: '1834020412.1677ed0.84d8803956bd47eea8444d716084f331',
        sortBy: 'most-recent',
       template: '<div class="grid-item instaimg"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></div>'
    });


    userFeed.run();


});
