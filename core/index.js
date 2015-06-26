var referee = require('referee'), sinon = require('sinon');
require('sinon-as-promised');
referee.format = require('formatio').configure({quoteStrings: false}).ascii;
require('referee-sinon')(referee, sinon);

exports.referee = referee;
exports.sinon = sinon;
