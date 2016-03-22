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

    $scope.basket = []

    $scope.addToBasket = function (book) {
      if (checkHave($scope.basket, book.name)) {
        var index = findIndex($scope.basket, book.name)
        $scope.basket[index].amount += 1
      } else {
        var data = {name: book.name, price: book.price, amount: 1}
        $scope.basket.push(data)
      }
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

    $scope.bill = function () {
      $scope.totalAmount = $scope.basket.reduce(function (sum, book) {
        return sum + book.amount
      }, 0)

      return $scope.basket
    }
  })
