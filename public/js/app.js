var angular
angular.module('hpApp', [])
  .controller('hpCtrl', function ($scope) {
    $scope.books = [
      { name: "Harry Potter and the Philosopher 's Stone", img: 'img/1.jpg', price: 100 },
      { name: 'Harry Potter and the Chamber of Secrets', img: 'img/2.jpg', price: 100 },
      { name: 'Harry Potter and the Prisoner of Azkaban', img: 'img/3.jpg', price: 100 },
      { name: 'Harry Potter and the Goblet of Fire', img: 'img/4.jpg', price: 100 },
      { name: 'Harry Potter and the Order of the Phoenix', img: 'img/5.jpg', price: 100 },
      { name: 'Harry Potter and the Half-Blood Prince', img: 'img/6.jpg', price: 100 },
      { name: 'Harry Potter and the Deathly Hallows', img: 'img/7.jpg', price: 100 }
    ]
  })
