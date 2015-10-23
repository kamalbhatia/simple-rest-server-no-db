var getDataServices = angular.module('getDataServices', ['ngResource']);

getDataServices.factory('ProductsJsonFactory', ['$resource',
  function($resource){
      return $resource('js/ProductsData.json', {}, {
      query: {method:'GET', params:{name:'name', description: 'description', price: 'price'}, isArray:true}
      //delete: {method: 'DELETE',params:{id: @Id}}
    });
  }]);


/*getDataServices.factory('ServerProductsFactory', ['$resource','http','ProductsJsonFactory',
  function($resource,ProductsJsonFactory){
     // $http.post('/Products/',ProductsJsonFactory.query()).success(function(data){
      //    console.log('data');
     // });
                 
      return $resource('/Products/', {}, {
              query: {method:'GET', params:{name:'name', description: 'description', price: 'price'}, isArray:true},
              save: {method:'POST', data: '@data', params:{name:'name', description: 'description', price: 'price'}, isArray:false}
              //delete: {method: 'DELETE', params:{id: 'id'}, isArray:true}
    });
  }]);*/