(function() {
  "use strict";

    angular.module('shop-list')
        .factory('ShopListService', ShopListService);

    function ShopListService() {

    	var items = [{
    		id: 0,
            name: 'Beetroot',
            shop: 'Auchan',
            quantity: '1kg'
        }, {
        	id: 1,
            name: 'Salt',
            shop: 'Silpo',
            quantity: '200g'
        }, {
        	id: 2,
            name: 'Beer',
            shop: 'Metro',
            quantity: '2 bottle'
        }, ];

        return {
        	items: items,
            addItem: addItem,
            removeItem: removeItem,
        };

        
        function addItem(name, shop, quantity) {
            items.push({
            	id: getNextId(),
                name: name,
                shop: shop,
                quantity: quantity
            });
        }

        function removeItem(id) {
        	alert(id);
        	for (var i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                	alert("ID: " + items[i].id + "Shop: " + items[i].shop);
                    items.splice(i, 1);
                    break;
                }
                alert("Выход из условия");
            }
            alert("Выход из цикла");
        }

        function getNextId() {
            var nextId = 0;
            if (items.length > 0) {
                nextId = items[items.length - 1].id + 1;
            }

            return nextId;
        }
    }
})();