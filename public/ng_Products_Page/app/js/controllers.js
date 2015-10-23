var productControllers = angular.module('productControllers', []);
var count = 1;
productControllers.controller('ListController', ['$scope','$http','ProductsJsonFactory',                                      
 
function($scope,$http,ProductsJsonFactory) {
       $scope.products = [];
       $scope.products = ProductsJsonFactory.query();
       console.log($scope.products);
       //ServerProductsFactory.post($scope.products);
       //ServerProductsFactory.save();
       //console.log($scope.products);
      
      function getProducts(){
       $http.get('/Products/').success(function(data){
           console.log(data);
           $scope.products = data;
           /*for(i=0; i < data.length; i++){
              $scope.products.push({
                name : data[i].name,
                description : data[i].description,
                price : data[i].price,
                id: data[i].id
              });
            console.log($scope.products);
           };*/
       });    
      }
    
    getProducts();
       
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
                 alert("Item with Id "+ data.id + " is succesfully added!");
				$scope.products.push(
				{
						name : $scope.myApp.itemForm.name,
						description : $scope.myApp.itemForm.description,
						price : $scope.myApp.itemForm.price,
                        id : data.id
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
     
     
    /* $scope.deleteElement = function(id){
        var deletedProduct =  ServerProductsFactory.delete(id);
        console.log(deletedProduct);
        $scope.products =ServerProductsFactory.query();
        console.log($scope.products);
        //getProducts();
        console.log($scope.products);
    };*/
    
    $scope.deleteElement = function(id){
        var confirmation = confirm("Are you sure you want to delete?");
		var d=id;
        if(confirmation === true){
		for(i in $scope.products){
			if($scope.products[i].id==id){
					$scope.products.splice(i,1);
                    console.log(id);
					$http.delete('/Products'+'/'+id).success(function(id){
                    alert(d +' is deleted');
					console.log(d +' is deleted');
					
				});
				$scope.newproduct={};
			}
		}
        }//end of if
        else{
           console.log("You cancelled delete!");
        }
	}
    
    
    
}]);// end of controller

productControllers.controller('ValidateCtrl',['$scope',function($scope){
   if(angular.isNumber(!($scope.myApp.itemForm.itemPrice))){
       console.log("its not a number");
   }
}]);