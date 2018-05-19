const request = require('request');
const expect  = require('chai').expect;

function getPostOpctions(word) {
  return {
    uri: 'http://localhost:8080/is-palindrome',
    method: 'POST',
    json: {
      word: word
    }
  };
}

describe('Testing App:', () => {
  it('post correct palindrome',(done) => {
    request
      .post(getPostOpctions('a man a plan a canal panama'), 
      (error, res, body) => {
        expect(res.statusCode).to.equal(200)
        expect(body.message).to.equal('is a palindrome')
        done();
      });
  });
  it('post incorrect palindrome', (done) => {
    request
      .post(getPostOpctions('macaco'),
      (error, res, body) => {
        expect(res.statusCode).to.equal(400)
        expect(body.message).to.equal('is not a palindrome')
        done();
      });
  });
});