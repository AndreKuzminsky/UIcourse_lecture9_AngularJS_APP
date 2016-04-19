(function() {
  angular.module('shop-list')
        .config(routes);

function routes($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'main-page/main-page.tpl.html',
                controller: 'MainCtrl'
            })
            .when('/add-item', {
                templateUrl: 'add-item/add-item.tpl.html',
                controller: 'AddItemCtlr'
            })
    }

})()