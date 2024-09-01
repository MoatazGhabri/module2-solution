(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
      .controller('ToBuyController', ToBuyController)
      .controller('AlreadyBoughtController', AlreadyBoughtController)
      .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
      var toBuy = this;

      toBuy.items = ShoppingListCheckOffService.getToBuyItems();

      toBuy.buyItem = function (itemIndex) {
          ShoppingListCheckOffService.buyItem(itemIndex);
      };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
      var alreadyBought = this;

      alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
      var service = this;

      // List of items to buy
      var toBuyItems = [
        { name: "cookies", quantity: 10 },
        { name: "chips", quantity: 5 },
        { name: "soda", quantity: 3 },
        { name: "chocolate", quantity: 7 },
        { name: "bread", quantity: 2 }
    ];
    

      // List of bought items
      var boughtItems = [];

      service.buyItem = function (itemIndex) {
          var item = toBuyItems[itemIndex];
          boughtItems.push(item);
          toBuyItems.splice(itemIndex, 1);
      };

      service.getToBuyItems = function () {
          return toBuyItems;
      };

      service.getBoughtItems = function () {
          return boughtItems;
      };
  }

})();
