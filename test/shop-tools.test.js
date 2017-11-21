var expect = require('chai').expect;
var getPrices = require('../src/shop-tools').getPrices

describe('getPrices', function() {
	var products = getPrices();
	  it('WHEN the client request the list THEN 4 items are returned', function() {
		  expect(products).eql({ banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6 });
  })
  });