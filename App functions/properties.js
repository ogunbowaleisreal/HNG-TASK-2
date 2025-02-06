const functions = require('./functions')

const properties = (number) => {
    const evenorOdd = functions.even(number) ? true : false;
    const armstrong = functions.is_armstrong(number);
    if (armstrong && evenorOdd) {
      return ['armstrong', 'even'];
    }
    if (armstrong) {
      return ['armstrong', 'odd'];
    } else {
      return evenorOdd ? ['even'] : ['odd'];
    }
  };

  module.exports = properties