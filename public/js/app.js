var angular = angular.module('hpApp', [])
  .controller('hpCtrl', function ($scope) {
    $scope.books = [
      { name: "Harry Potter and the Philosopher 's Stone", img: 'img/1.jpg', price: 100.00 },
      { name: 'Harry Potter and the Chamber of Secrets', img: 'img/2.jpg', price: 100.00 },
      { name: 'Harry Potter and the Prisoner of Azkaban', img: 'img/3.jpg', price: 100.00 },
      { name: 'Harry Potter and the Goblet of Fire', img: 'img/4.jpg', price: 100.00 },
      { name: 'Harry Potter and the Order of the Phoenix', img: 'img/5.jpg', price: 100.00 },
      { name: 'Harry Potter and the Half-Blood Prince', img: 'img/6.jpg', price: 100.00 },
      { name: 'Harry Potter and the Deathly Hallows', img: 'img/7.jpg', price: 100.00 }
    ]
    $scope.totalAmount = 0
    $scope.basket = []

    $scope.addToBasket = function (book) {
      if (checkHave($scope.basket, book.name)) {
        var index = findIndex($scope.basket, book.name)
        $scope.basket[index].amount += 1
      } else {
        var data = {name: book.name, price: book.price, amount: 1}
        $scope.basket.push(data)
      }
      $scope.show = $scope.bill()
    }

    $scope.bill = function () {
      $scope.totalAmount = $scope.basket.reduce(function (sum, book) {
        return sum + book.amount
      }, 0)
      var data = $scope.basket
      var totalDiscount = discount(data)

      $scope.$apply
      return {data: $scope.basket, discount: totalDiscount, total: sumTotalPrice($scope.basket)}
    }

    var sumTotalPrice = function (items) {
      var sumprice = items.reduce(function (sum, item) {
        return sum + (item.price * item.amount)
      }, 0)
      return sumprice
    }
    var checkHave = function (arr, name) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
          return true
        }
      }
    }

    var findIndex = function (arr, name) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
          return i
        }
      }
    }

    $scope.title = function () {
      if ($scope.totalAmount === 0) {
        return 'บ้านนายจินบุ๊ค'
      } else {
        return '(' + $scope.totalAmount + ') บ้านนายจินบุ๊ค'
      }
    }

    var getAmount = function (items) {
      var amount = items.map(function (obj) {
        return obj.amount
      })
      return amount
    }

    var discount = function (book) {
      var items = book.map(function (obj) {
        return {amount: obj.amount, price: obj.price}
      })

      var totalDis = 0
      var amount = getAmount(items)

      while (items.length > 1) {
        var sumprice = items.reduce(function (sum, item) {
          return sum + item.price
        }, 0)

        totalDis += ((items.length - 1) / 10) * sumprice

        for (var i = 0; i < items.length; i++) {
          if (items[i].amount > 0) {
            amount[i] -= 1
            items[i].amount -= 1
          }
        }
        for (var j = items.length - 1; j >= 0; j--) {
          if (items[j].amount === 0) {
            items.splice(j, 1)
            amount.splice(j, 1)
          }
        }
      }
      return totalDis
    }
  })
