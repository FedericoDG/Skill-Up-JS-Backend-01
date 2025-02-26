'use strict';

const { faker } = require('@faker-js/faker');

const transactions = [
  // USER_ID: 2
  {
    amount: 122450,
    originUserId: 1,
    destinationUserId: 2,
    categoryId: 2,
    transactionDate: Date.now()
  },
  {
    amount: 20000,
    originUserId: 2,
    destinationUserId: 3,
    categoryId: 1,
    transactionDate: Date.now(),
    concept: 'Transferencia a Jane'
  },
  {
    amount: 30000,
    originUserId: 2,
    destinationUserId: 1,
    categoryId: 3,
    transactionDate: Date.now(),
    concept: 'Pago alquiler (Inmobiliaria Ezequilian)'
  },
  {
    amount: 15000,
    originUserId: 2,
    destinationUserId: 1,
    categoryId: 4,
    transactionDate: Date.now(),
    concept: 'Compra en Supermercado Disco'
  },
  {
    amount: 5500,
    originUserId: 2,
    destinationUserId: 1,
    categoryId: 4,
    transactionDate: Date.now(),
    concept: 'Compra en Supermercado Cotto'
  },
  {
    amount: 17000,
    originUserId: 2,
    destinationUserId: 1,
    categoryId: 8,
    transactionDate: Date.now(),
    concept: 'Compra de Zapatillas'
  },
  {
    amount: 575,
    originUserId: 2,
    destinationUserId: 1,
    categoryId: 9,
    transactionDate: Date.now(),
    concept: 'Viaje en taxi hacia la oficina'
  },
  {
    amount: 9630,
    originUserId: 2,
    destinationUserId: 1,
    categoryId: 7,
    transactionDate: Date.now(),
    concept: 'Pago de obra Social'
  },
  {
    amount: 5300,
    originUserId: 2,
    destinationUserId: 1,
    categoryId: 5,
    transactionDate: Date.now(),
    concept: 'Pago factura de internet'
  },
  {
    amount: 9420,
    originUserId: 2,
    destinationUserId: 1,
    categoryId: 8,
    transactionDate: Date.now(),
    concept: 'Compra de camisa'
  },
  // USER_ID: 3
  {
    amount: 66000,
    originUserId: 1,
    destinationUserId: 3,
    categoryId: 2,
    transactionDate: Date.now()
  },
  {
    amount: 27500,
    originUserId: 3,
    destinationUserId: 1,
    categoryId: 3,
    transactionDate: Date.now(),
    concept: 'Pago alquiler (Inmobiliaria Roca)'
  },
  {
    amount: 22740,
    originUserId: 3,
    destinationUserId: 1,
    categoryId: 4,
    transactionDate: Date.now(),
    concept: 'Compra en Supermercado Cotto'
  },
  {
    amount: 7682,
    originUserId: 3,
    destinationUserId: 1,
    categoryId: 6,
    transactionDate: Date.now(),
    concept: 'PAgo monotributo'
  },
  {
    amount: 575,
    originUserId: 3,
    destinationUserId: 1,
    categoryId: 9,
    transactionDate: Date.now(),
    concept: 'Viaje en taxi hacia la clínica (ida)'
  },
  {
    amount: 610,
    originUserId: 3,
    destinationUserId: 1,
    categoryId: 9,
    transactionDate: Date.now(),
    concept: 'Viaje en taxi hacia la clínica (vuelta)'
  },
  {
    amount: 1900,
    originUserId: 3,
    destinationUserId: 1,
    categoryId: 5,
    transactionDate: Date.now(),
    concept: 'Pago factura telefonía'
  },
  {
    amount: 12350,
    originUserId: 3,
    destinationUserId: 1,
    categoryId: 8,
    transactionDate: Date.now(),
    concept: 'Compra de jean'
  }
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Transactions', transactions, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Transactions', null, {});
  }
};
