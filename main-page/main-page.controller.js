(function() {
    "use strict";

    function MainCtrl($scope, ShopListService) {
        $scope.items = ShopListService.items;
        $scope.removeItem = removeItem;

        function removeItem() {
            ShopListService.removeItem();
        }
    };

    angular
        .module('shop-list')
        .controller('MainCtrl', MainCtrl);
})();
