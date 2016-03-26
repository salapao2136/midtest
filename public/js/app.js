/* global angular */
angular.module('hpApp', [])
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
        var index = $scope.basket.findIndex((element) => element.name === book.name)
        $scope.basket[index].amount += 1
      } else {
        $scope.basket.push({name: book.name, price: book.price, amount: 1})
      }
      $scope.bill()
    }

    var filterData = function (array) {
      return array.filter((element) => element.amount !== 0)
    }

    $scope.bill = function () {
      $scope.basket = filterData($scope.basket)

      $scope.totalAmount = $scope.basket.reduce((sum, book) => sum + book.amount, 0)
      var totalDiscount = discount($scope.basket)

      $scope.show = {data: $scope.basket, discount: totalDiscount, total: sumTotalPrice($scope.basket)}
    }

    var sumTotalPrice = function (items) {
      return items.reduce((sum, item) => sum + (item.price * item.amount), 0)
    }

    var checkHave = function (arr, name) {
      return arr.find((element) => element.name === name)
    }

    $scope.title = function () {
      if ($scope.totalAmount === 0) {
        return 'บ้านนายจินบุ๊ค'
      } else {
        return '(' + $scope.totalAmount + ') บ้านนายจินบุ๊ค'
      }
    }

    var discount = function (book) {
      var items = book.map((obj) => {
        return { amount: obj.amount, price: obj.price }
      })
      var totalDis = 0

      while (items.length > 1) {
        var sumprice = items.reduce((sum, item) => sum + item.price, 0)
        totalDis += ((items.length - 1) / 10) * sumprice
        items = items.map((obj) => {
          return { amount: obj.amount - 1, price: obj.price }
        })
        items = filterData(items)
      }
      return totalDis
    }
  })
