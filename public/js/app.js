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
      $scope.bill()
    }

    var filterData = function (array) {
      function isNotZero (element, index, array) {
        return (element.amount !== 0)
      }
      return array.filter(isNotZero)
    }

    $scope.bill = function () {
      $scope.basket = filterData($scope.basket)

      $scope.totalAmount = $scope.basket.reduce(function (sum, book) {
        return sum + book.amount
      }, 0)
      var data = $scope.basket
      var totalDiscount = discount(data)

      $scope.$apply
      var returnData = {data: $scope.basket, discount: totalDiscount, total: sumTotalPrice($scope.basket)}
      $scope.show = returnData
    }

    var sumTotalPrice = function (items) {
      var sumprice = items.reduce(function (sum, item) {
        return sum + (item.price * item.amount)
      }, 0)
      return sumprice
    }

    var checkHave = function (arr, name) {
      function isName (element, index, array) {
        return element.name === name
      }
      return arr.find(isName)
    }

    var findIndex = function (arr, name) {
      function isName (element, index, array) {
        return element.name === name
      }
      return arr.findIndex(isName)
    }

    $scope.title = function () {
      if ($scope.totalAmount === 0) {
        return 'บ้านนายจินบุ๊ค'
      } else {
        return '(' + $scope.totalAmount + ') บ้านนายจินบุ๊ค'
      }
    }

    var discount = function (book) {
      var items = book.map(function (obj) {
        return {amount: obj.amount, price: obj.price}
      })

      var totalDis = 0

      while (items.length > 1) {
        var sumprice = items.reduce(function (sum, item) {
          return sum + item.price
        }, 0)

        totalDis += ((items.length - 1) / 10) * sumprice

        items = items.map(function (obj) {
          return {amount: obj.amount - 1, price: obj.price}
        })

        items = filterData(items)
      }
      return totalDis
    }
  })
