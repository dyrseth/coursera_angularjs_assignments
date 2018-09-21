(function () {

  console.log('test');

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService']
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.shoppingList = ShoppingListCheckOffService.getItems();

    toBuy.itemBought = function (item) {
      ShoppingListCheckOffService.setItemBought(item, true);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.shoppingList = ShoppingListCheckOffService.getItems();

    alreadyBought.itemBought = function (item) {
      ShoppingListCheckOffService.setItemBought(item, false);
    }
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var items = getPrePopulatedShoppingList();

    service.setItemBought = function (item, isBought) {
      item.bought = isBought;
    }

    service.getItems = function () {
      return items;
    }

    function getPrePopulatedShoppingList() {
      var items = [
                    { name : "Milk", quantity : 2.1, bought: false }
                    , { name : "Cookie", quantity : 2.1, bought: false }
                    , { name : "Coffee", quantity : 2.2, bought: false }
                    , { name : "Ice cream", quantity : 2.6, bought: false }
                    , { name : "Chocolate", quantity : 2.1, bought: false }
                  ];
      return items;
    }
  }

})();
