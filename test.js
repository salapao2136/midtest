/* global describe, it */
require('mocha-generators').install()
var Nightmare = require('nightmare')
var expect = require('chai').expect

var server = require('./server.js')

describe('TDD of Harry Potter Book', function () {
  it('episode 2&3 episode each 2 book  each discount 40 bath', function * () {
    this.timeout(15000)
    var nightmare = Nightmare()
    var value = yield nightmare
      .goto('http://localhost:3000')
      .click('.button-1')
      .click('.button-1')
      .click('.button-2')
      .click('.button-2')
      .click('a.btn-floating.btn-large.red')
      .evaluate(function () {
        var data = {discount: document.querySelector('.discount').innerHTML, total: document.querySelector('.total').innerHTML, totalNet: document.querySelector('.totalNet').innerHTML}
        return data.discount
      })
    expect(value).to.equal('40')
  })
  it('All Episode episode each 1 book should discount 420 bath', function * () {
    this.timeout(15000)
    var nightmare = Nightmare()
    var value = yield nightmare
      .goto('http://localhost:3000')
      .click('.button-0')
      .click('.button-1')
      .click('.button-2')
      .click('.button-3')
      .click('.button-4')
      .click('.button-5')
      .click('.button-6')
      .click('a.btn-floating.btn-large.red')
      .evaluate(function () {
        var data = {discount: document.querySelector('.discount').innerHTML, total: document.querySelector('.total').innerHTML, totalNet: document.querySelector('.totalNet').innerHTML}
        return data.discount
      })
    expect(value).to.equal('420')
  })
  it('All Episode episode each 1 book should discount 420 bath', function * () {
    this.timeout(15000)
    var nightmare = Nightmare()
    var value = yield nightmare
      .goto('http://localhost:3000')
      .click('.button-0')
      .click('.button-1')
      .click('.button-2')
      .click('.button-3')
      .click('.button-4')
      .click('.button-5')
      .click('.button-6')
      .click('a.btn-floating.btn-large.red')
      .evaluate(function () {
        var data = {discount: document.querySelector('.discount').innerHTML, total: document.querySelector('.total').innerHTML, totalNet: document.querySelector('.totalNet').innerHTML}
        return data.discount
      })
    expect(value).to.equal('420')
  })
})
