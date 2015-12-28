var chai = require('chai');
var mocha = require('mocha');
var chirp = require('./../chirp.js');
var expect = chai.expect;
var should = chai.should();

describe('chirp', function () {
  it('should exist', function () {
    expect(chirp).to.exist;
    expect(chirp).to.be.a('function');
  });
  it ("should return a string", function() {
    var result = chirp(3, "poo");

    expect(result).to.be.a('string');
    expect(result).to.be.equal('poo poo poo ');
  });
});