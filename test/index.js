/* global describe, it */
require('mocha-generators').install()
var Nightmare = require('nightmare')
var expect = require('chai').expect

describe('TDD of Harry Potter Book', function () {
  it('20', function * () {
    this.timeout(15000)
    var nightmare = Nightmare()
    var value = yield nightmare
      .goto('http://localhost:3000')
      .click('a.waves-effect.waves-light.btn-floating.button-1')
      .click('a.waves-effect.waves-light.btn-floating.button-1')
      .click('a.waves-effect.waves-light.btn-floating.button-2')
      .click('a.btn-floating.btn-large.red')
      .evaluate(function () {
        var data = {discount: document.querySelector('.discount').innerHTML, total: document.querySelector('.total').innerHTML, totalNet: document.querySelector('.totalNet').innerHTML}
        return data.discount
      })
    expect(value).to.equal('20')
  })
  it('40 round 2', function * () {
    this.timeout(15000)
    var nightmare = Nightmare()
    var value = yield nightmare
      .goto('http://localhost:3000')
      .click('a.waves-effect.waves-light.btn-floating.button-1')
      .click('a.waves-effect.waves-light.btn-floating.button-1')
      .click('a.waves-effect.waves-light.btn-floating.button-2')
      .click('a.waves-effect.waves-light.btn-floating.button-2')
      .click('a.btn-floating.btn-large.red')
      .evaluate(function () {
        var data = {discount: document.querySelector('.discount').innerHTML, total: document.querySelector('.total').innerHTML, totalNet: document.querySelector('.totalNet').innerHTML}
        return data.discount
      })
    expect(value).to.equal('50')
  })
})
