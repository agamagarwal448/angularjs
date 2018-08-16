app.controller('viewController', function($scope, $http){

     $scope.viewUser = function(uid){
        var url = 'http://api.qshore.com/view-user/'+uid;

        $http({
            url:url,
            method:'GET',
        }).then(function(res){
            console.log(res);
            $scope.userInfo = res.data.data;
            document.write(userInfo);
        }, function(r){
            console.log('failure');
            console.log(r)
        })
    }
})
