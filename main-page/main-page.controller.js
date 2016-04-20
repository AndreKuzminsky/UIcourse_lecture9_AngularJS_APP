(function() {
    "use strict";

    function MainCtrl($scope, ShopListService) {
        $scope.items = ShopListService.items;
        $scope.removeItem = removeItem;

        function removeItem(itemId) {
            ShopListService.removeItem(itemId);
        }
    };

    angular
        .module('shop-list')
        .controller('MainCtrl', MainCtrl);
})();
