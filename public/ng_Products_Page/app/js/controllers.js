var productControllers = angular.module('productControllers', ['getDataServices']);
var count = 1;
productControllers.controller('ListController', ['$scope','$http','ProductsJsonFactory',            
                                                 
 function($scope,$http,ProductsJsonFactory) {
   
       $scope.products = ProductsJsonFactory.query();
       console.log($scope.products);
     
       $http.get('/Products/').success(function(data){
           console.log(data);
           for(i=0; i < data.length; i++){
              $scope.products.push({
                name : data[i].name,
                description : data[i].description,
                price : data[i].price
              });
            console.log($scope.products);
           };
       });
     //function to add the element
    $scope.saveElement = function(list,itemForm){
        console.log("Hi ,it works!");
        console.log(itemForm.$valid);
        if(itemForm.$valid){
            console.log('saving user'); // save $scope.user object
            $http({
                 method: 'POST',
                 url: '/Products',
                 data: list,
                 headers: {'Content-Type': 'application/json'}
            }).success(function (data) {
                 console.log(data);
				$scope.products.push(
				{
						name : $scope.myApp.itemForm.name,
						description : $scope.myApp.itemForm.description,
						price : $scope.myApp.itemForm.price
				});
                console.log($scope.products);
						$scope.myApp.itemForm.name='';
						$scope.myApp.itemForm.description='';
						$scope.myApp.itemForm.price='';
			});
        }
        else{
            console.log('Unable to save. Validation error!');
            }
        };  
    
    
    
}]);// end of controller

productControllers.controller('ValidateCtrl',['$scope',function($scope){
   if(angular.isNumber(!($scope.myApp.itemForm.itemPrice))){
       console.log("its not a number");
   }
}]);