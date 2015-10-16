var productControllers = angular.module('productControllers', [ ]);
productControllers.controller('ListController', ['$scope','$http',function($scope,$http) {
   if(!$scope.products){
       $http.get('/Products/').success(function(data){
           $scope.products = data;
       });
   }
     do{
         $http.get('js/ProductsData.json').success(function(data){
            $scope.jsonDataTest= data;
             console.log(typeof($scope.jsonDataTest));
             console.log($scope.jsonDataTest);
             //products = [];
             //loop through that data array of objects
             for(i=0; i < $scope.jsonDataTest.length; i++){
             //console.log($scope.jsonDataTest[i]);
                $http({ method: 'POST',
                   url: '/Products',
                   data: $scope.jsonDataTest[i],
                   headers: {'Content-Type': 'application/json'}
                   }).success(function(data){
                         //products.push({
                              //name : data.name,
                              //description : data.description,
                             // price : data.price
                          //});
                       });
               };// end of for loop
         //$scope.products = products;
        });// end of http 
    }// end of else
    while(
    
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