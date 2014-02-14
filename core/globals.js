var testSetup = require('./');
var referee = testSetup.referee;
global.referee = referee;
global.assert = referee.assert;
global.refute = referee.refute;
global.expect = referee.expect;
global.sinon = testSetup.sinon;
module.exports = testSetup;
