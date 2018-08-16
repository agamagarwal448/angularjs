app.controller('myController', function($scope, $http){
    
    $http({
        url: 'http://api.qshore.com/users',
    	method: 'GET',
    })
    .then(function(res){
    	//success
    	$scope.users = res.data.data;
    }, function(res){
    	// failure
    	console.log('failure');
    	console.log(res);
    })
})

    