var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true })

nightmare
  .goto('http://localhost:3000')
  .click('a.waves-effect.waves-light.btn-floating.button-1')
  .click('a.waves-effect.waves-light.btn-floating.button-1')
  .click('a.waves-effect.waves-light.btn-floating.button-2')
  .click('a.btn-floating.btn-large.red')
  .wait(1000)
  .evaluate(function () {
    return document.querySelector('p.discount').innerHTML
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
