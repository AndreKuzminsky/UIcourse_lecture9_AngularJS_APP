(function() {
    "use strict";

    function AddItemCtlr($scope, $location, ShopListService) {
        $scope.name = '';
        $scope.shop = '';
        $scope.quantity = '';

        $scope.addItem = addItem;

        function addItem() {
            ShopListService.addItem($scope.newName, $scope.newShop, $scope.newQuantity);
            $location.path('/');
        }
    }

    angular
        .module('shop-list')
        .controller('AddItemCtlr', AddItemCtlr);
})()
