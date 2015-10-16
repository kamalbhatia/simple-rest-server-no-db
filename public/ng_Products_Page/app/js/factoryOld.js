var getDataServices = angular.module('getDataServices', ['ngResource']);

getDataServices.factory('ProductsJsonFactory', ['$resource',
  function($resource){
      return $resource('js/ProductsData.json', {}, {
      query: {method:'GET', params:{name:'name', description: 'description', price: 'price'}, isArray:true}
    });
  }]);