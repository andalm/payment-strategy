'use strict';

module.exports = class PaymentStrategy {
  constructor(name) {
    if (!name || typeof name != 'string') {
      throw Error('name parameter is required or must be a string.');
    }

    this.name = name;
  }

  registerCreditCard() {
    throw Error('registerCreditCard method isn\'t implement yet.');
  }

  deleteCreditCard() {
    throw Error('deleteCreditCard method isn\'t implement yet.');
  }

  verifyCreditCard() {
    throw Error('verifyCreditCard method isn\'t implement yet.');
  }

  pay() {
    throw Error('pay method isn\'t implement yet.');
  }

  refund() {
    throw Error('refund method isn\'t implement yet.');
  }

  query() {
    throw Error('query method isn\'t implement yet.');
  }
};