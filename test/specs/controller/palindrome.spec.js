const request = require('request');
const expect  = require('chai').expect;

describe('Testing App:', () => {
  it('get correct palindrome',(done) => {
    request
      .get('http://localhost:8080/is-palindrome/aba', 
      (error, res, body) => {
        expect(res.statusCode).to.equal(200)
        expect(body).to.contain("is a palindrome")
        done();
      });
  });
  it('get incorrect palindrome', (done) => {
    request
    .get('http://localhost:8080/is-palindrome/macaco',
      (error, res, body) => {
        expect(res.statusCode).to.equal(400)
        expect(body).to.contain("is not a palindrome")
        done();
      });
  });
});