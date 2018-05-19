module.exports = (app) => {
    function removeSpecialCharacters(str) { 
      let retorno = str.replace(/[^a-zA-Z]| /g, '');
      return retorno;
    }

    function revertString(str) {
      return str.split( '' ).reverse( ).join( '' );
    }

    function isPalindrome(word) {
      let str = removeSpecialCharacters(word);
      return str === revertString(str)
    }

    app.get("/is-palindrome/:word",(req,res) => {
      if(isPalindrome(req.params.word)){
        res.status(200).send({'message': 'is a palindrome'}) 
      }else{
        res.status(400).send({'message': 'is not a palindrome'}) 
      }
    });
}