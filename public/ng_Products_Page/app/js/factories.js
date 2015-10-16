var getDataServices = angular.module('getDataServices', ['ngResource']);

getDataServices.factory('ProductsJsonFactory', ['$resource',
  function($resource){
      var promise = null;
      return $resource('js/ProductsData.json', {}, {
          if(promise){
              query: {method:'GET', params:{name:'name', description: 'description', price: 'price'}, isArray:true}
    });
  }]);