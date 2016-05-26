(function() {
    'use strict';

    angular
        .module('app')
	      .run(localServerConfig);

    function localServerConfig($httpBackend,$httpParamSerializerJQLike) {
        $httpBackend.whenGET(/js\/.*/).passThrough();
       	$httpBackend.whenGET(/lib\/.*/).passThrough();

      	var admin = {
      	    username: 'admin',
            password: 'pa$$w0rd'
      	};

       $httpBackend.whenPOST(/api\/auth\/authorize\/$/,admin).respond(200,{
           token: 'token'
       });

      $httpBackend.whenPOST(/api\/auth\/authorize\//).respond(400);

   }
})();
